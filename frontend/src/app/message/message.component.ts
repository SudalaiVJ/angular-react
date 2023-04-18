import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent {
  message: string | undefined;

  constructor(private http: HttpClient) {
    this.http.get('/api/message').subscribe((data: any) => {
      this.message = data.message;
    });
  }
}
