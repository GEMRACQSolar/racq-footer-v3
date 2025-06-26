<template>
  <footer :style="footerStyle">
    <div class="footer-container">
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
        marginTop: 'auto'
      }
    },
    businessInfoStyle() {
      return {
        color: '#ffffff',
        fontSize: '12px',
        lineHeight: '1.5',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
      }
    }
  }
}
</script>

<style scoped>
.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

.business-info {
  opacity: 0.9;
}

/* Responsive design */
@media (max-width: 768px) {
  .business-info {
    font-size: 11px;
    padding: 0 10px;
  }
}
</style>