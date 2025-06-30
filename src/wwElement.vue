<template>
  <footer :style="footerStyle">
    <div class="footer-container">
      <h5 class="developer-info" :style="developerInfoStyle">
        {{ content.developerInfo }}
      </h5>
      <div class="business-info" :style="businessInfoStyle">
        {{ content.businessInfo }}
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'RACQFooterV3',
  props: {
    content: {
      type: Object,
      required: true
    }
  },
  mounted() {
    // Emit loaded event for WeWeb integration
    this.$emit('trigger-event', {
      name: 'footer:loaded',
      event: {
        timestamp: new Date().toISOString()
      }
    })
  },
  computed: {
    footerStyle() {
      return {
        backgroundColor: this.content.backgroundColor || '#151b23',
        padding: '20px',
        width: '100%',
        marginTop: 'auto',
        // Fix white space issue - make footer sticky to bottom
        position: 'relative',
        bottom: 0,
        minHeight: 'fit-content'
      }
    },
    developerInfoStyle() {
      return {
        color: '#ffffff',
        fontSize: '14px',
        fontWeight: '500',
        margin: '0 0 15px 0',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        opacity: '0.95'
      }
    },
    businessInfoStyle() {
      return {
        color: '#ffffff',
        fontSize: '12px',
        lineHeight: '1.5',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
        opacity: '0.9'
      }
    }
  }
}
</script>

<style scoped>
footer {
  /* Ensure footer stays at bottom of viewport */
  flex-shrink: 0;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

.developer-info {
  font-weight: 500;
}

.business-info {
  opacity: 0.9;
}

/* Responsive design */
@media (max-width: 768px) {
  .developer-info {
    font-size: 13px;
    padding: 0 10px;
  }
  
  .business-info {
    font-size: 11px;
    padding: 0 10px;
  }
}
</style>