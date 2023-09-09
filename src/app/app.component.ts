import { Component, Input, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Input() serverElements = [{type: 'server',name:" TestServer", content:"Just a server" }];

  onServerAdded(serverData:{serverName:string,serverContent:string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });

  }
  onBluePrintAdded(blueprintData:{serverName:string,serverContent:string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }
  onChangeFirst(){
    this.serverElements[0].name='Changed!';
    console.warn(this.serverElements)
    // console.warn(Changes)
  }
  onDestroyFirst(){
    this.serverElements.splice(0,1);
   }
  }

