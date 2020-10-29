import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

	 cards = [
		{
			 bannerImage: 'banner-img',
			 profileImage: 'https://images.unsplash.com/photo-1444011283387-7b0f76371f12?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
			 name: 'Nick',
			 mainText: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem',
			 btn: 'follow'
			
		 },
		 {
			 bannerImage: 'banner-img',
			 profileImage: 'https://images.unsplash.com/photo-1444011283387-7b0f76371f12?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
			 name: 'Josh',
			 mainText: 'taking long naps is a joy, sometimes when i nap too much i lorem lorem lorem lorem lorem lorem lorem lorem lorem',
			 btn: 'follow',
			
		 },
		 {
			 bannerImage: 'banner-img',
			 profileImage: 'https://images.unsplash.com/photo-1444011283387-7b0f76371f12?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ',
			 name: 'Edgar',
			 mainText: 'I love to sit at the coffee shop and write code as well as lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem',
			 btn: 'follow',
			
		},
	]

  constructor() { }

  ngOnInit(): void {
  }

}
