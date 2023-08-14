<template>
    <div class="typical-form">
      <h2 class="title">Feedback Form</h2>
      <form @submit.prevent="submitFeedback" class="form">
        <label class="form-label">Name:</label>
        <input type="text" v-model="this.user.name" class="form-input" disabled required />
  
        <label class="form-label">Email:</label>
        <input type="email" v-model="this.user.email" class="form-input" disabled required />
  
        <label class="form-label">Feedback Message:</label>
        <textarea v-model="feedbackMessage" class="form-input" rows="4" required></textarea>
  
        <button type="submit" class="submit-button">Submit Feedback</button>
      </form>
    </div>
  </template>
  
  <script>
  import { mapGetters } from 'vuex';
  import { BACKEND_ENTRY_POINT } from '@/constants';
  
  export default {
    name: 'FeedbackForm',
    data() {
      return {
        feedbackMessage: '',
      };
    },
    computed: {
        ...mapGetters(['user']), 
    },
    methods: {
      async submitFeedback() {
        const feedbackData = {
            name: this.user.name, 
            email: this.user.email,
            feedbackMessage: this.feedbackMessage,
        };
        try {
            const response = await this.$http.post(`${BACKEND_ENTRY_POINT}/api/submit-feedback`, feedbackData);
            console.log(response.data.message); 
            
            alert('Thank you for your feedback!');
            
            this.feedbackMessage = '';
        } catch (error) {
            console.error('Error submitting feedback:', error.response.data);
            alert('Error submitting feedback. Please try again.');
        }
      },
    },
  };
  </script>