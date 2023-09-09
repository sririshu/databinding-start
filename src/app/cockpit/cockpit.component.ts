import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent{
  @Output('sCreated') serverCreated= new EventEmitter<{serverName:string, serverContent:string}>();
  @Output('bpCreated') blueprintCreated= new EventEmitter<{serverName:string, serverContent:string}>();
  newServerName = '';
  newServerContent = '';
  @ViewChild('severContentInput') severContentInput:ElementRef;

  onAddServer(nameInput:HTMLInputElement) {
     this.serverCreated.emit({serverName:nameInput.value, serverContent:this.severContentInput.nativeElement.value});

  }
  onAddBlueprint(nameInput:HTMLInputElement) {
     this.blueprintCreated.emit({serverName:nameInput.value, serverContent:this.severContentInput.nativeElement.value});

  }
}
