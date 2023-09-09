import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, OnChanges,DoCheck, AfterContentInit,AfterContentChecked,AfterViewInit, 
AfterViewChecked, OnDestroy{
 
 @Input('srvElement') element:{type:string, name:string,content:string};
 @Input() name: string;
 @ViewChild('heading') header:ElementRef
 
 constructor(){
  console.warn('constructor called');
 }
 ngOnChanges(changes:SimpleChanges){
  console.warn(changes);
 }
 ngOnInit(){
  console.warn("ngOnInit called");
  console.warn(this.header.nativeElement.TextContent);
 }
 ngDoCheck(){
  console.warn("ngDoCheck called")
 }
 ngAfterContentInit(): void {
  console.warn("ngAfterContentInit called")
 }
 ngAfterContentChecked(): void {
  console.warn("ngAfterContentChecked called")
 }
 ngAfterViewInit(): void {
  console.warn("ngAfterViewInit called")
 }
 ngAfterViewChecked(): void {
  console.warn("ngAfterViewChecked called")
 }
 ngOnDestroy(): void {
  console.warn("ngOnDestroy called")
 }

}
