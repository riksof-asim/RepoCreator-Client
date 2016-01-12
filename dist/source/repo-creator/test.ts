import { RepoCreator } from 'source/services/RepoCreator';
import { Repository as RepositoryWireModel } from 'source/models/Repository';
import { OAuth } from 'source/services/OAuth-Auth0';
import { GitHub } from 'source/services/GitHub';
import { StripeCheckout, StripeToken } from 'source/services/StripeCheckout';
import { Router } from 'aurelia-router';
import { EventAggregator } from 'aurelia-event-aggregator';
import { autoinject } from 'aurelia-dependency-injection';
import { computedFrom } from 'aurelia-binding';
import { Validation } from 'aurelia-validation';
import underscore from 'underscore';

class Repository {
	constructor(
		public owner: string,
		public name: string,
		public favorite: boolean,
		public sponsored: boolean,
		public popular: boolean,
		public result: boolean
	) {}

	equals = (other: Repository): boolean => {
		return this.owner == other.owner
			&& this.name == other.name;
	}

}

enum Sections {

}

@autoinject
export class Test {
	private allTemplates: Repository[] = [];
	private resultTemplates: Repository[] = [];

	constructor(
		private oAuth: OAuth,
		private repoCreator: RepoCreator,
		private gitHub: GitHub,
		private router: Router,
		private eventAggregator: EventAggregator,
		protected validation: Validation
	) {
		this.validation = validation.on(this)
			.ensure('searchInput')
			.isNotEmpty();
	}

	activate() {

	}

	protected getRepository = (repo: Repository) => {
		console.log("g e t  R e p o s i t o r y")

		this.repoCreator.getMyRepositories().then( res => { 

			console.log(res)

		}).catch((error: Error) => {

			console.log("g e t  R e p o s i t o r y  e r r o r")
			
		});
	}	

}
