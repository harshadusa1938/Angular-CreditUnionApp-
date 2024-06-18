import { Component } from '@angular/core';
import { MemberService } from '../services/member.service';

@Component({
  selector: 'app-create-member',
  templateUrl: './create-member.component.html',
  styleUrls: ['./create-member.component.css']
})
export class CreateMemberComponent {
  member = { firstName: '', lastName: '', accountNumber: '', address: '' };

  constructor(private memberService: MemberService) {}

  createMember() {
    this.memberService.createMember(this.member).subscribe(
      response => {
        console.log('Member created successfully', response);
      },
      error => {
        console.error('Error creating member', error);
      }
    );
  }
}
