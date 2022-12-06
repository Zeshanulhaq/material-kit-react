import { makeAutoObservable } from 'mobx';
import { errorHandler } from 'helper';
import { SC } from 'helper/ServerCall';
import {
  createClient,
  createPart,
  showClient,
  showpart,
  showResource,
  updateClient,
  updatepart,
} from 'helper/endPoints';
import { toast } from 'react-toastify';
import { history } from 'browserHistory';
import { useParams } from 'react-router-dom';

const FormFields = {
  name: {
    name: 'name',
    defaultValue: '',
  },
  role: {
    name: 'role',
    defaultValue: '',
  },
  email: {
    name: 'email',
    defaultValue: '',
  },
  password: {
    name: 'password',
    defaultValue: '',
  },
};

export class ClientModal {
  constructor() {
    this.loading = false;

    if (this.params.id) {
      this.getClients();
    }

    //  MAKING FIELDS FOR CREATE AND EDIT
    this.state = this.getClientsInitialObject();

    makeAutoObservable(this);
  }

  // check all disabled
  get isAllDisabled() {
    return this.loading || this.getLoading;
  }

  // Making fields form FormFields Object to Create IO
  getClientsInitialObject = () => {
    let fields = {};
    Object.entries(FormFields)?.map(([key, value]) => {
      fields = {
        ...fields,
        [key]: value?.defaultValue,
      };
    });

    return fields;
  };

  // UPDATE STATES ON CHANGE
  setAttribute = (key, value) => {
    this.state[key] = value;
    console.log(key, value);
  };

  // GET DATA BY ID

  getClients = async () => {
    try {
      this.getLoading = true;
      const response = await SC.getCall(showClient + '/' + this.params.id);
      let rowData = response.data[0];
      this.state.name = rowData?.name;
      this.state.contact = rowData?.contact;
      this.state.email = rowData?.email;
      this.state.phone = rowData?.phone;
      this.state.address = rowData?.address;
      this.getLoading = false;
    } catch (error) {
      this.getLoading = false;
      errorHandler(error);
    }
  };
  // HANDLE RESET
  handleReset = () => {
    this.state = this.getClientsInitialObject();
  };
  // SUBMIT DATA
  handleSubmit = async (e) => {
    e.preventDefault();
    this.validation = false;
    let dataToSubmit = {
      ...this.state,
    };
    console.log('data to sumbit', dataToSubmit);

    if (
      dataToSubmit.name === '' ||
      dataToSubmit.contact_person === '' ||
      dataToSubmit.email === '' ||
      dataToSubmit.phone === '' ||
      dataToSubmit.address === ''
    ) {
      this.validation = true;
      // console.log("validation");
    } else {
      try {
        this.loading = true;
        const response = this.params.id
          ? await SC.putCall(updateClient + '/' + this.params.id, dataToSubmit)
          : await SC.postCall(createClient, dataToSubmit);
        this.handleReset();
        this.loading = false;
        toast.success(response?.data?.message || 'Data submitted successfully!');
        history.push('/clients');
      } catch (error) {
        this.loading = false;
        errorHandler(error);
      }
    }
  };
}
