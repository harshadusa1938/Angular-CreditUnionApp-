import { Component } from '@angular/core';
import { MemberService } from '../services/member.service';

@Component({
  selector: 'app-search-member',
  templateUrl: './search-member.component.html',
  styleUrls: ['./search-member.component.css']
})
export class SearchMemberComponent {
  query = '';
  results: any[] = [];

  constructor(private memberService: MemberService) {}

  searchMember() {
    this.memberService.searchMember(this.query).subscribe(
      response => {
        this.results = response;
        console.log('Search results', response);
      },
      error => {
        console.error('Error searching members', error);
      }
    );
  }
}
