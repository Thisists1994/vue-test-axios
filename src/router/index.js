import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Audio from '../pages/audio/audio';
import Dy from '../components/Dy';
import Ds from '../components/Ds';
import Dshi from '../components/Dshi';
import Tc from '../components/Tc';
import Music from '../components/Music';
import Broadcast from '../pages/broadcast/broadcast';
import MyPlayer from '../components/MyPlayer';
import WyCloudApi from '../components/WyCloudApi';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello1',
      component: HelloWorld
    },
    {
      path: '/hello',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/audio',
      name: 'Audio',
      component: Audio,
      children: [
        {
          path: 'Dy',
          name: 'Dy',
          component: Dy
        },
        {
          path: 'Ds',
          name: 'Ds',
          component: Ds
        },
        {
          path: 'Dshi',
          name: 'Dshi',
          component: Dshi
        },
        {
          path: 'Tc',
          name: 'Tc',
          component: Tc
        },
        {
          path: 'Music',
          name: 'Music',
          component: Music
        }
      ]
    },
    {
      path: '/broadcast',
      name: 'Broadcast',
      component: Broadcast
    },
    {
      path: '/MyPlayer',
      name: 'MyPlayer',
      component: MyPlayer
    },
    {
      path: '/WyCloudApi',
      name: 'WyCloudApi',
      component: WyCloudApi
    }
  ]
});
