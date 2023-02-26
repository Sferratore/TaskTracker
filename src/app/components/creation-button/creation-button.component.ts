import { Component } from '@angular/core';

@Component({
  selector: 'app-creation-button',
  templateUrl: './creation-button.component.html',
  styleUrls: ['./creation-button.component.css']
})
export class CreationButtonComponent {
  
  
  showCreationForm(){
    var creationform = document.getElementById('creationform');
    
    if(creationform !== null){
      creationform.style.display = "";
    }
  }
}
