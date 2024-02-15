import { ViewEncapsulation } from '@angular/core';
import { Component, Input } from '@angular/core';
import { Member } from 'src/app/_models/member';

@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrl: './member-card.component.css',
  encapsulation: ViewEncapsulation.Emulated
})
export class MemberCardComponent {
  @Input() member: Member | undefined;


}
