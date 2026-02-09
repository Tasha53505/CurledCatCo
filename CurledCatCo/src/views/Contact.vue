<script setup>
import { ref } from 'vue'

const formData = ref({
  name: '',
  email: '',
  subject: '',
  message: '',
})

const submitted = ref(false)

const handleSubmit = () => {
  // Basic validation
  if (
    formData.value.name &&
    formData.value.email &&
    formData.value.subject &&
    formData.value.message
  ) {
    submitted.value = true
    // Reset form
    formData.value = {
      name: '',
      email: '',
      subject: '',
      message: '',
    }
    // Hide message after 5 seconds
    setTimeout(() => {
      submitted.value = false
    }, 5000)
  }
}
</script>

<template>
  <div class="contact">
    <div class="contact-header">
      <div class="container">
        <h1>Get In Touch</h1>
        <p>Have questions? We'd love to hear from you!</p>
      </div>
    </div>

    <div class="container contact-content">
      <div class="contact-form-section">
        <h2>Send us a Message</h2>

        <div v-if="submitted" class="success-message">
          <p>✓ Thank you for your message! We'll get back to you soon.</p>
        </div>

        <form @submit.prevent="handleSubmit" class="contact-form">
          <div class="form-group">
            <label for="name">Name *</label>
            <input
              id="name"
              v-model="formData.name"
              type="text"
              placeholder="Your name"
              required
            />
          </div>

          <div class="form-group">
            <label for="email">Email *</label>
            <input
              id="email"
              v-model="formData.email"
              type="email"
              placeholder="your.email@example.com"
              required
            />
          </div>

          <div class="form-group">
            <label for="subject">Subject *</label>
            <input
              id="subject"
              v-model="formData.subject"
              type="text"
              placeholder="What is this about?"
              required
            />
          </div>

          <div class="form-group">
            <label for="message">Message *</label>
            <textarea
              id="message"
              v-model="formData.message"
              placeholder="Your message here..."
              rows="6"
              required
            ></textarea>
          </div>

          <button type="submit" class="submit-button">Send Message</button>
        </form>
      </div>

      <div class="contact-info-section">
        <h2>Contact Information</h2>

        <div class="info-card">
          <h3>📧 Email</h3>
          <p><a href="mailto:hello@curledcatco.com">hello@curledcatco.com</a></p>
        </div>

        <div class="info-card">
          <h3>🐱 Follow Us</h3>
          <p>Follow Curled Cat Co on social media for updates, new scents, and cat content!</p>
          <ul class="social-links">
            <li><a href="#" target="_blank">Instagram</a></li>
            <li><a href="#" target="_blank">TikTok</a></li>
            <li><a href="#" target="_blank">Facebook</a></li>
          </ul>
        </div>

        <div class="info-card">
          <h3>💌 Newsletter</h3>
          <p>Sign up for our newsletter to be the first to hear about new scents and special offers!</p>
        </div>

        <div class="info-card">
          <h3>📍 Shipping</h3>
          <p>We currently ship within the UK. International shipping coming soon!</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.contact {
  min-height: 100vh;
}

.contact-header {
  background-color: #f5f5f5;
  padding: 3rem 0;
  border-bottom: 1px solid #000000;
}

.contact-header h1 {
  font-size: 3rem;
  margin-bottom: 0.5rem;
}

.contact-header p {
  font-size: 1.1rem;
  color: #666;
}

.contact-content {
  padding: 3rem 0;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 3rem;
}

.contact-form-section h2,
.contact-info-section h2 {
  margin-bottom: 2rem;
}

.success-message {
  background-color: #d4edda;
  border: 1px solid #c3e6cb;
  color: #155724;
  padding: 1rem;
  margin-bottom: 1.5rem;
  border-radius: 4px;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group label {
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.form-group input,
.form-group textarea {
  padding: 0.75rem;
  border: 1px solid #e0e0e0;
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #000000;
}

.submit-button {
  background-color: #000000;
  color: #ffffff;
  padding: 0.8rem 1.5rem;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  align-self: flex-start;
}

.submit-button:hover {
  background-color: #333333;
  transform: translateY(-2px);
}

.info-card {
  background-color: #f9f9f9;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  border: 1px solid #e0e0e0;
}

.info-card h3 {
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
}

.info-card p {
  color: #666;
  font-size: 0.95rem;
  margin-bottom: 0;
}

.social-links {
  list-style: none;
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.social-links a {
  color: #000000;
  font-weight: 600;
  text-decoration: underline;
}

@media (max-width: 968px) {
  .contact-content {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .contact-header h1 {
    font-size: 2rem;
  }

  .contact-content {
    padding: 1.5rem 0;
  }
}
</style>
