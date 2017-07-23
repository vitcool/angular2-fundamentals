import { Injectable } from '@angular/core';

@Injectable()
export class MailService {

  messages = [
    {id: 0, text : 'You are now friens with Karl'},
    {id: 1, text : 'Karl liked your images'},
    {id: 2, text : 'Karl has already deleted his profile'}
  ];

  update(id, text){
    this.messages = this.messages.map(m => m.id == id ? {id, text} : m);
  }

  constructor() { }

}
