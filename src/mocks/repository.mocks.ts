

import {Repository} from "../model/repository.interface";
import {USER_LIST} from "./user.mocks";

const repositoryList: Repository[]=[
  {
    name:'salim',
    description : 'The camera shows the usage of dsfsdfsd sdf sdfsdf dsfds',
    owner : USER_LIST[0],
  },
  {
    name:'Ionic 3 ',
    description : 'The camera dfgdfgdf thedfgdfg usage of dsfsdfsd sdf sdfsdf dsfds',
    owner : USER_LIST[1],
  }
];


export const REPOSITORY_LIST = repositoryList;
