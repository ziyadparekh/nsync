import SingleTextForm from 'components/SingleTextForm';
import Autocomplete from 'components/Autocomplete';

const config = {
  formConfig: {
    1: {
      component: SingleTextForm,
      props: {
        label: 'Channel Name',
        placeholder: 'eg Fruity Movies',
        type: 'text',
        ref: 'input',
        refType: 'channel'
      }
    },
    2: {
      component: Autocomplete,
      props: {
        
      }
    }
  },
  totalPages: 3
};

export default config;