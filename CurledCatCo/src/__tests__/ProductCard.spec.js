import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import ProductCard from '../components/ProductCard.vue'

const baseProduct = {
  id: 1,
  name: 'Test Candle',
  description: 'Test description',
  waxColor: '#fff',
  jarColor: 'black',
  labelColor: 'white',
  size: '9 oz',
  price: 10,
  image: '/test.png',
  video: '/test.mp4',
}

describe('ProductCard', () => {
  it('renders image and video when provided', async () => {
    const wrapper = mount(ProductCard, { props: { product: baseProduct } })
    const img = wrapper.find('img')
    expect(img.exists()).toBe(true)
    expect(img.attributes('src')).toBe(baseProduct.image)

    const vid = wrapper.find('video')
    expect(vid.exists()).toBe(true)
    expect(vid.attributes('src')).toBe(baseProduct.video)
  })

  it('plays and pauses video on hover events', async () => {
    const wrapper = mount(ProductCard, { props: { product: baseProduct } })
    const container = wrapper.find('.product-image-container')
    const vid = wrapper.find('video')

    // stub video methods so we can observe calls
    vid.element.play = vi.fn()
    vid.element.pause = vi.fn()

    await container.trigger('mouseover')
    expect(vid.element.play).toHaveBeenCalled()

    await container.trigger('mouseleave')
    expect(vid.element.pause).toHaveBeenCalled()
  })
})