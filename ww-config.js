export default {
  editor: {
    label: {
      en: 'RACQ Footer v3'
    },
    icon: 'fas fa-copyright',
    bubble: {
      icon: 'fas fa-copyright'
    }
  },
  
  properties: {
    backgroundColor: {
      label: {
        en: 'Background Color'
      },
      type: 'Color',
      defaultValue: '#151b23'
    },
    developerInfo: {
      label: {
        en: 'Developer Information'
      },
      type: 'Text',
      defaultValue: 'RACQ Solar Estimator developed by GEM Energy Australia Pty Ltd trading as RACQ Solar'
    },
    businessInfo: {
      label: {
        en: 'Business Information'
      },
      type: 'Text',
      defaultValue: 'RACQ Solar, 3A / 17 Sugarmill Road Pinkenba, Brisbane, QLD 4008. GEM Energy Australia Pty Ltd, ABN 25 164 579 382, Electrical Contractor Licence 78701, trading as RACQ Solar.'
    }
  },
  
  events: [
    {
      name: 'footer:loaded',
      label: 'On Footer Loaded',
      eventSchema: {
        timestamp: { type: 'string', label: 'Timestamp' }
      }
    }
  ]
}