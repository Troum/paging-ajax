import Vue from 'vue'
import {ValidationObserver, ValidationProvider} from "vee-validate";
import AlertComponent from "../components/AlertComponent";
import TileComponent from "../components/TileComponent";


Vue.component('validation-observer', ValidationObserver)
Vue.component('validation-provider', ValidationProvider)
Vue.component('alert-component', AlertComponent)
Vue.component('tile-component', TileComponent)
