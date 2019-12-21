var commitData = [
    {
      "sha": "9b9116c79d626b6356f3dfe0d48c9d990ac412a2",
      "node_id": "MDY6Q29tbWl0MjQxOTUzMzk6OWI5MTE2Yzc5ZDYyNmI2MzU2ZjNkZmUwZDQ4YzlkOTkwYWM0MTJhMg==",
      "commit": {
        "author": {
          "name": "Keen Yee Liau",
          "email": "kyliau@umich.edu",
          "date": "2019-12-20T18:26:24Z"
        },
        "committer": {
          "name": "Alex Rickabaugh",
          "email": "alx+alxhub@alxandria.net",
          "date": "2019-12-20T22:40:04Z"
        },
        "message": "feat(language-service): Append symbol type to hover tooltip (#34515)\n\nNow that https://github.com/angular/angular/pull/34177 fixed the `TypeWrapper`\nto have a proper name, we have the information needed to show the type\nname in a hover tooltip.\n\nPR Close #34515",
        "tree": {
          "sha": "19b6eab514cdf40f5860371bd09db9678f92ed2e",
          "url": "https://api.github.com/repos/angular/angular/git/trees/19b6eab514cdf40f5860371bd09db9678f92ed2e"
        },
        "url": "https://api.github.com/repos/angular/angular/git/commits/9b9116c79d626b6356f3dfe0d48c9d990ac412a2",
        "comment_count": 0,
        "verification": {
          "verified": false,
          "reason": "unsigned",
          "signature": null,
          "payload": null
        }
      },
      "url": "https://api.github.com/repos/angular/angular/commits/9b9116c79d626b6356f3dfe0d48c9d990ac412a2",
      "html_url": "https://github.com/angular/angular/commit/9b9116c79d626b6356f3dfe0d48c9d990ac412a2",
      "comments_url": "https://api.github.com/repos/angular/angular/commits/9b9116c79d626b6356f3dfe0d48c9d990ac412a2/comments",
      "author": {
        "login": "kyliau",
        "id": 2941178,
        "node_id": "MDQ6VXNlcjI5NDExNzg=",
        "avatar_url": "https://avatars3.githubusercontent.com/u/2941178?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/kyliau",
        "html_url": "https://github.com/kyliau",
        "followers_url": "https://api.github.com/users/kyliau/followers",
        "following_url": "https://api.github.com/users/kyliau/following{/other_user}",
        "gists_url": "https://api.github.com/users/kyliau/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/kyliau/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/kyliau/subscriptions",
        "organizations_url": "https://api.github.com/users/kyliau/orgs",
        "repos_url": "https://api.github.com/users/kyliau/repos",
        "events_url": "https://api.github.com/users/kyliau/events{/privacy}",
        "received_events_url": "https://api.github.com/users/kyliau/received_events",
        "type": "User",
        "site_admin": false
      },
      "committer": {
        "login": "alxhub",
        "id": 4175141,
        "node_id": "MDQ6VXNlcjQxNzUxNDE=",
        "avatar_url": "https://avatars0.githubusercontent.com/u/4175141?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/alxhub",
        "html_url": "https://github.com/alxhub",
        "followers_url": "https://api.github.com/users/alxhub/followers",
        "following_url": "https://api.github.com/users/alxhub/following{/other_user}",
        "gists_url": "https://api.github.com/users/alxhub/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/alxhub/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/alxhub/subscriptions",
        "organizations_url": "https://api.github.com/users/alxhub/orgs",
        "repos_url": "https://api.github.com/users/alxhub/repos",
        "events_url": "https://api.github.com/users/alxhub/events{/privacy}",
        "received_events_url": "https://api.github.com/users/alxhub/received_events",
        "type": "User",
        "site_admin": false
      },
      "parents": [
        {
          "sha": "2dffe65cfdc1329819a5ef0d0f2069efb0b07ff8",
          "url": "https://api.github.com/repos/angular/angular/commits/2dffe65cfdc1329819a5ef0d0f2069efb0b07ff8",
          "html_url": "https://github.com/angular/angular/commit/2dffe65cfdc1329819a5ef0d0f2069efb0b07ff8"
        }
      ]
    },
    {
      "sha": "2dffe65cfdc1329819a5ef0d0f2069efb0b07ff8",
      "node_id": "MDY6Q29tbWl0MjQxOTUzMzk6MmRmZmU2NWNmZGMxMzI5ODE5YTVlZjBkMGYyMDY5ZWZiMGIwN2ZmOA==",
      "commit": {
        "author": {
          "name": "Keen Yee Liau",
          "email": "kyliau@google.com",
          "date": "2019-12-18T19:08:31Z"
        },
        "committer": {
          "name": "Alex Rickabaugh",
          "email": "alx+alxhub@alxandria.net",
          "date": "2019-12-19T19:34:03Z"
        },
        "message": "fix(language-service): completions after \"let x of |\" in ngFor (#34473)\n\nThis commit fixes a bug in which we do testing for completions.\nSubsequently, this exposes another bug in our implementation whereby\nsuggestions are not provided in \"ngFor\" where there should have been.\n\nCurrently, multiple test cases are grouped together in a single\ntemplate. This requires the template to be somewhat complete so that\ntest cases that depend on variables declared earlier would pass.\n\nConsider the following example:\n\n```\n  template: `\n    <div *ngFor=\"let ~{for-person}person of ~{for-people}people\">\n      <span>Name: {{~{for-interp-person}person.~{for-interp-name}name}}</span>\n      <span>Age: {{person.~{for-interp-age}age}}</span>\n    </div>`,\n```\n\nIn order to test `~{for-interp-person}`, `people` has to be included after\n`~{for-people}`. This means the test case for `~{for-people}` is not\nreflective of the actual use case because the variable is already there!\nIn real case, the expression would be incomplete, and our implementation\nfailed to take that into account.\n\nThis commit breaks such test into individual tests, and fix the bugs in\nthe underlying implementation.\n\nPR Close #34473",
        "tree": {
          "sha": "735ab4ca4acb8b0517f7989b3150e60da0072f51",
          "url": "https://api.github.com/repos/angular/angular/git/trees/735ab4ca4acb8b0517f7989b3150e60da0072f51"
        },
        "url": "https://api.github.com/repos/angular/angular/git/commits/2dffe65cfdc1329819a5ef0d0f2069efb0b07ff8",
        "comment_count": 0,
        "verification": {
          "verified": false,
          "reason": "unsigned",
          "signature": null,
          "payload": null
        }
      },
      "url": "https://api.github.com/repos/angular/angular/commits/2dffe65cfdc1329819a5ef0d0f2069efb0b07ff8",
      "html_url": "https://github.com/angular/angular/commit/2dffe65cfdc1329819a5ef0d0f2069efb0b07ff8",
      "comments_url": "https://api.github.com/repos/angular/angular/commits/2dffe65cfdc1329819a5ef0d0f2069efb0b07ff8/comments",
      "author": {
        "login": "kyliau",
        "id": 2941178,
        "node_id": "MDQ6VXNlcjI5NDExNzg=",
        "avatar_url": "https://avatars3.githubusercontent.com/u/2941178?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/kyliau",
        "html_url": "https://github.com/kyliau",
        "followers_url": "https://api.github.com/users/kyliau/followers",
        "following_url": "https://api.github.com/users/kyliau/following{/other_user}",
        "gists_url": "https://api.github.com/users/kyliau/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/kyliau/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/kyliau/subscriptions",
        "organizations_url": "https://api.github.com/users/kyliau/orgs",
        "repos_url": "https://api.github.com/users/kyliau/repos",
        "events_url": "https://api.github.com/users/kyliau/events{/privacy}",
        "received_events_url": "https://api.github.com/users/kyliau/received_events",
        "type": "User",
        "site_admin": false
      },
      "committer": {
        "login": "alxhub",
        "id": 4175141,
        "node_id": "MDQ6VXNlcjQxNzUxNDE=",
        "avatar_url": "https://avatars0.githubusercontent.com/u/4175141?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/alxhub",
        "html_url": "https://github.com/alxhub",
        "followers_url": "https://api.github.com/users/alxhub/followers",
        "following_url": "https://api.github.com/users/alxhub/following{/other_user}",
        "gists_url": "https://api.github.com/users/alxhub/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/alxhub/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/alxhub/subscriptions",
        "organizations_url": "https://api.github.com/users/alxhub/orgs",
        "repos_url": "https://api.github.com/users/alxhub/repos",
        "events_url": "https://api.github.com/users/alxhub/events{/privacy}",
        "received_events_url": "https://api.github.com/users/alxhub/received_events",
        "type": "User",
        "site_admin": false
      },
      "parents": [
        {
          "sha": "260a061f9f3e85b567a722cfa2b5aa8a84cfce2a",
          "url": "https://api.github.com/repos/angular/angular/commits/260a061f9f3e85b567a722cfa2b5aa8a84cfce2a",
          "html_url": "https://github.com/angular/angular/commit/260a061f9f3e85b567a722cfa2b5aa8a84cfce2a"
        }
      ]
    },
    {
      "sha": "260a061f9f3e85b567a722cfa2b5aa8a84cfce2a",
      "node_id": "MDY6Q29tbWl0MjQxOTUzMzk6MjYwYTA2MWY5ZjNlODViNTY3YTcyMmNmYTJiNWFhOGE4NGNmY2UyYQ==",
      "commit": {
        "author": {
          "name": "Kara Erickson",
          "email": "karakara@google.com",
          "date": "2019-12-18T23:53:15Z"
        },
        "committer": {
          "name": "Kara Erickson",
          "email": "karakara@google.com",
          "date": "2019-12-18T23:53:15Z"
        },
        "message": "docs: release notes for the v9.0.0-rc.7 release",
        "tree": {
          "sha": "e12d6c9af2c3cda502a88418ddf00bf2ffd85fc3",
          "url": "https://api.github.com/repos/angular/angular/git/trees/e12d6c9af2c3cda502a88418ddf00bf2ffd85fc3"
        },
        "url": "https://api.github.com/repos/angular/angular/git/commits/260a061f9f3e85b567a722cfa2b5aa8a84cfce2a",
        "comment_count": 0,
        "verification": {
          "verified": false,
          "reason": "unsigned",
          "signature": null,
          "payload": null
        }
      },
      "url": "https://api.github.com/repos/angular/angular/commits/260a061f9f3e85b567a722cfa2b5aa8a84cfce2a",
      "html_url": "https://github.com/angular/angular/commit/260a061f9f3e85b567a722cfa2b5aa8a84cfce2a",
      "comments_url": "https://api.github.com/repos/angular/angular/commits/260a061f9f3e85b567a722cfa2b5aa8a84cfce2a/comments",
      "author": {
        "login": "kara",
        "id": 3871688,
        "node_id": "MDQ6VXNlcjM4NzE2ODg=",
        "avatar_url": "https://avatars3.githubusercontent.com/u/3871688?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/kara",
        "html_url": "https://github.com/kara",
        "followers_url": "https://api.github.com/users/kara/followers",
        "following_url": "https://api.github.com/users/kara/following{/other_user}",
        "gists_url": "https://api.github.com/users/kara/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/kara/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/kara/subscriptions",
        "organizations_url": "https://api.github.com/users/kara/orgs",
        "repos_url": "https://api.github.com/users/kara/repos",
        "events_url": "https://api.github.com/users/kara/events{/privacy}",
        "received_events_url": "https://api.github.com/users/kara/received_events",
        "type": "User",
        "site_admin": false
      },
      "committer": {
        "login": "kara",
        "id": 3871688,
        "node_id": "MDQ6VXNlcjM4NzE2ODg=",
        "avatar_url": "https://avatars3.githubusercontent.com/u/3871688?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/kara",
        "html_url": "https://github.com/kara",
        "followers_url": "https://api.github.com/users/kara/followers",
        "following_url": "https://api.github.com/users/kara/following{/other_user}",
        "gists_url": "https://api.github.com/users/kara/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/kara/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/kara/subscriptions",
        "organizations_url": "https://api.github.com/users/kara/orgs",
        "repos_url": "https://api.github.com/users/kara/repos",
        "events_url": "https://api.github.com/users/kara/events{/privacy}",
        "received_events_url": "https://api.github.com/users/kara/received_events",
        "type": "User",
        "site_admin": false
      },
      "parents": [
        {
          "sha": "cf37c003ffc4e1307a174d6f58e5ed435db68e7e",
          "url": "https://api.github.com/repos/angular/angular/commits/cf37c003ffc4e1307a174d6f58e5ed435db68e7e",
          "html_url": "https://github.com/angular/angular/commit/cf37c003ffc4e1307a174d6f58e5ed435db68e7e"
        }
      ]
    },
    {
      "sha": "cf37c003ffc4e1307a174d6f58e5ed435db68e7e",
      "node_id": "MDY6Q29tbWl0MjQxOTUzMzk6Y2YzN2MwMDNmZmM0ZTEzMDdhMTc0ZDZmNThlNWVkNDM1ZGI2OGU3ZQ==",
      "commit": {
        "author": {
          "name": "crisbeto",
          "email": "crisbeto@abv.bg",
          "date": "2019-11-26T18:33:26Z"
        },
        "committer": {
          "name": "Kara Erickson",
          "email": "karakara@google.com",
          "date": "2019-12-18T23:04:49Z"
        },
        "message": "feat(ivy): error in ivy when inheriting a ctor from an undecorated base (#34460)\n\nAngular View Engine uses global knowledge to compile the following code:\n\n```typescript\nexport class Base {\n  constructor(private vcr: ViewContainerRef) {}\n}\n\n@Directive({...})\nexport class Dir extends Base {\n  // constructor inherited from base\n}\n```\n\nHere, `Dir` extends `Base` and inherits its constructor. To create a `Dir`\nthe arguments to this inherited constructor must be obtained via dependency\ninjection. View Engine is able to generate a correct factory for `Dir` to do\nthis because via metadata it knows the arguments of `Base`'s constructor,\neven if `Base` is declared in a different library.\n\nIn Ivy, DI is entirely a runtime concept. Currently `Dir` is compiled with\nan ngDirectiveDef field that delegates its factory to `getInheritedFactory`.\nThis looks for some kind of factory function on `Base`, which comes up\nempty. This case looks identical to an inheritance chain with no\nconstructors, which works today in Ivy.\n\nBoth of these cases will now become an error in this commit. If a decorated\nclass inherits from an undecorated base class, a diagnostic is produced\ninforming the user of the need to either explicitly declare a constructor or\nto decorate the base class.\n\nPR Close #34460",
        "tree": {
          "sha": "6a2422ca5ba3ec1cd20da0da040e337fd1ee484a",
          "url": "https://api.github.com/repos/angular/angular/git/trees/6a2422ca5ba3ec1cd20da0da040e337fd1ee484a"
        },
        "url": "https://api.github.com/repos/angular/angular/git/commits/cf37c003ffc4e1307a174d6f58e5ed435db68e7e",
        "comment_count": 0,
        "verification": {
          "verified": false,
          "reason": "unsigned",
          "signature": null,
          "payload": null
        }
      },
      "url": "https://api.github.com/repos/angular/angular/commits/cf37c003ffc4e1307a174d6f58e5ed435db68e7e",
      "html_url": "https://github.com/angular/angular/commit/cf37c003ffc4e1307a174d6f58e5ed435db68e7e",
      "comments_url": "https://api.github.com/repos/angular/angular/commits/cf37c003ffc4e1307a174d6f58e5ed435db68e7e/comments",
      "author": {
        "login": "crisbeto",
        "id": 4450522,
        "node_id": "MDQ6VXNlcjQ0NTA1MjI=",
        "avatar_url": "https://avatars0.githubusercontent.com/u/4450522?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/crisbeto",
        "html_url": "https://github.com/crisbeto",
        "followers_url": "https://api.github.com/users/crisbeto/followers",
        "following_url": "https://api.github.com/users/crisbeto/following{/other_user}",
        "gists_url": "https://api.github.com/users/crisbeto/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/crisbeto/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/crisbeto/subscriptions",
        "organizations_url": "https://api.github.com/users/crisbeto/orgs",
        "repos_url": "https://api.github.com/users/crisbeto/repos",
        "events_url": "https://api.github.com/users/crisbeto/events{/privacy}",
        "received_events_url": "https://api.github.com/users/crisbeto/received_events",
        "type": "User",
        "site_admin": false
      },
      "committer": {
        "login": "kara",
        "id": 3871688,
        "node_id": "MDQ6VXNlcjM4NzE2ODg=",
        "avatar_url": "https://avatars3.githubusercontent.com/u/3871688?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/kara",
        "html_url": "https://github.com/kara",
        "followers_url": "https://api.github.com/users/kara/followers",
        "following_url": "https://api.github.com/users/kara/following{/other_user}",
        "gists_url": "https://api.github.com/users/kara/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/kara/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/kara/subscriptions",
        "organizations_url": "https://api.github.com/users/kara/orgs",
        "repos_url": "https://api.github.com/users/kara/repos",
        "events_url": "https://api.github.com/users/kara/events{/privacy}",
        "received_events_url": "https://api.github.com/users/kara/received_events",
        "type": "User",
        "site_admin": false
      },
      "parents": [
        {
          "sha": "dcc8ff4ce7444c29892f6cd82f60fbf88bebcf95",
          "url": "https://api.github.com/repos/angular/angular/commits/dcc8ff4ce7444c29892f6cd82f60fbf88bebcf95",
          "html_url": "https://github.com/angular/angular/commit/dcc8ff4ce7444c29892f6cd82f60fbf88bebcf95"
        }
      ]
    },
    {
      "sha": "dcc8ff4ce7444c29892f6cd82f60fbf88bebcf95",
      "node_id": "MDY6Q29tbWl0MjQxOTUzMzk6ZGNjOGZmNGNlNzQ0NGMyOTg5MmY2Y2Q4MmY2MGZiZjg4YmViY2Y5NQ==",
      "commit": {
        "author": {
          "name": "crisbeto",
          "email": "crisbeto@abv.bg",
          "date": "2019-12-11T16:59:05Z"
        },
        "committer": {
          "name": "Kara Erickson",
          "email": "karakara@google.com",
          "date": "2019-12-18T23:04:49Z"
        },
        "message": "feat(ivy): throw compilation error when providing undecorated classes (#34460)\n\nAdds a compilation error if the consumer tries to pass in an undecorated class into the `providers` of an `NgModule`, or the `providers`/`viewProviders` arrays of a `Directive`/`Component`.\n\nPR Close #34460",
        "tree": {
          "sha": "a685fc247723da7fffb43c2a0b41ff743cfa4f01",
          "url": "https://api.github.com/repos/angular/angular/git/trees/a685fc247723da7fffb43c2a0b41ff743cfa4f01"
        },
        "url": "https://api.github.com/repos/angular/angular/git/commits/dcc8ff4ce7444c29892f6cd82f60fbf88bebcf95",
        "comment_count": 0,
        "verification": {
          "verified": false,
          "reason": "unsigned",
          "signature": null,
          "payload": null
        }
      },
      "url": "https://api.github.com/repos/angular/angular/commits/dcc8ff4ce7444c29892f6cd82f60fbf88bebcf95",
      "html_url": "https://github.com/angular/angular/commit/dcc8ff4ce7444c29892f6cd82f60fbf88bebcf95",
      "comments_url": "https://api.github.com/repos/angular/angular/commits/dcc8ff4ce7444c29892f6cd82f60fbf88bebcf95/comments",
      "author": {
        "login": "crisbeto",
        "id": 4450522,
        "node_id": "MDQ6VXNlcjQ0NTA1MjI=",
        "avatar_url": "https://avatars0.githubusercontent.com/u/4450522?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/crisbeto",
        "html_url": "https://github.com/crisbeto",
        "followers_url": "https://api.github.com/users/crisbeto/followers",
        "following_url": "https://api.github.com/users/crisbeto/following{/other_user}",
        "gists_url": "https://api.github.com/users/crisbeto/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/crisbeto/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/crisbeto/subscriptions",
        "organizations_url": "https://api.github.com/users/crisbeto/orgs",
        "repos_url": "https://api.github.com/users/crisbeto/repos",
        "events_url": "https://api.github.com/users/crisbeto/events{/privacy}",
        "received_events_url": "https://api.github.com/users/crisbeto/received_events",
        "type": "User",
        "site_admin": false
      },
      "committer": {
        "login": "kara",
        "id": 3871688,
        "node_id": "MDQ6VXNlcjM4NzE2ODg=",
        "avatar_url": "https://avatars3.githubusercontent.com/u/3871688?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/kara",
        "html_url": "https://github.com/kara",
        "followers_url": "https://api.github.com/users/kara/followers",
        "following_url": "https://api.github.com/users/kara/following{/other_user}",
        "gists_url": "https://api.github.com/users/kara/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/kara/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/kara/subscriptions",
        "organizations_url": "https://api.github.com/users/kara/orgs",
        "repos_url": "https://api.github.com/users/kara/repos",
        "events_url": "https://api.github.com/users/kara/events{/privacy}",
        "received_events_url": "https://api.github.com/users/kara/received_events",
        "type": "User",
        "site_admin": false
      },
      "parents": [
        {
          "sha": "6057c7a373016d42f80218bdc45602ea6108c73c",
          "url": "https://api.github.com/repos/angular/angular/commits/6057c7a373016d42f80218bdc45602ea6108c73c",
          "html_url": "https://github.com/angular/angular/commit/6057c7a373016d42f80218bdc45602ea6108c73c"
        }
      ]
    },
    {
      "sha": "6057c7a373016d42f80218bdc45602ea6108c73c",
      "node_id": "MDY6Q29tbWl0MjQxOTUzMzk6NjA1N2M3YTM3MzAxNmQ0MmY4MDIxOGJkYzQ1NjAyZWE2MTA4YzczYw==",
      "commit": {
        "author": {
          "name": "Alex Rickabaugh",
          "email": "alx+alxhub@alxandria.net",
          "date": "2019-12-17T20:39:57Z"
        },
        "committer": {
          "name": "Kara Erickson",
          "email": "karakara@google.com",
          "date": "2019-12-18T23:04:49Z"
        },
        "message": "refactor(ivy): force NG-space error codes for template errors (#34460)\n\nThe function `makeTemplateDiagnostic` was accepting an error code of type\n`number`, making it easy to accidentally pass an `ErrorCode` directly and\nnot convert it to an Angular diagnostic code first.\n\nThis commit refactors `makeTemplateDiagnostic` to accept `ErrorCode` up\nfront, and convert it internally. This is less error-prone.\n\nPR Close #34460",
        "tree": {
          "sha": "b811ca61966ab46f9c7a6c6db101e9c6a2737360",
          "url": "https://api.github.com/repos/angular/angular/git/trees/b811ca61966ab46f9c7a6c6db101e9c6a2737360"
        },
        "url": "https://api.github.com/repos/angular/angular/git/commits/6057c7a373016d42f80218bdc45602ea6108c73c",
        "comment_count": 0,
        "verification": {
          "verified": false,
          "reason": "unsigned",
          "signature": null,
          "payload": null
        }
      },
      "url": "https://api.github.com/repos/angular/angular/commits/6057c7a373016d42f80218bdc45602ea6108c73c",
      "html_url": "https://github.com/angular/angular/commit/6057c7a373016d42f80218bdc45602ea6108c73c",
      "comments_url": "https://api.github.com/repos/angular/angular/commits/6057c7a373016d42f80218bdc45602ea6108c73c/comments",
      "author": {
        "login": "alxhub",
        "id": 4175141,
        "node_id": "MDQ6VXNlcjQxNzUxNDE=",
        "avatar_url": "https://avatars0.githubusercontent.com/u/4175141?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/alxhub",
        "html_url": "https://github.com/alxhub",
        "followers_url": "https://api.github.com/users/alxhub/followers",
        "following_url": "https://api.github.com/users/alxhub/following{/other_user}",
        "gists_url": "https://api.github.com/users/alxhub/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/alxhub/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/alxhub/subscriptions",
        "organizations_url": "https://api.github.com/users/alxhub/orgs",
        "repos_url": "https://api.github.com/users/alxhub/repos",
        "events_url": "https://api.github.com/users/alxhub/events{/privacy}",
        "received_events_url": "https://api.github.com/users/alxhub/received_events",
        "type": "User",
        "site_admin": false
      },
      "committer": {
        "login": "kara",
        "id": 3871688,
        "node_id": "MDQ6VXNlcjM4NzE2ODg=",
        "avatar_url": "https://avatars3.githubusercontent.com/u/3871688?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/kara",
        "html_url": "https://github.com/kara",
        "followers_url": "https://api.github.com/users/kara/followers",
        "following_url": "https://api.github.com/users/kara/following{/other_user}",
        "gists_url": "https://api.github.com/users/kara/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/kara/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/kara/subscriptions",
        "organizations_url": "https://api.github.com/users/kara/orgs",
        "repos_url": "https://api.github.com/users/kara/repos",
        "events_url": "https://api.github.com/users/kara/events{/privacy}",
        "received_events_url": "https://api.github.com/users/kara/received_events",
        "type": "User",
        "site_admin": false
      },
      "parents": [
        {
          "sha": "498a2ffba37b97247ecb996ded2f431b0f444725",
          "url": "https://api.github.com/repos/angular/angular/commits/498a2ffba37b97247ecb996ded2f431b0f444725",
          "html_url": "https://github.com/angular/angular/commit/498a2ffba37b97247ecb996ded2f431b0f444725"
        }
      ]
    },
    {
      "sha": "498a2ffba37b97247ecb996ded2f431b0f444725",
      "node_id": "MDY6Q29tbWl0MjQxOTUzMzk6NDk4YTJmZmJhMzdiOTcyNDdlY2I5OTZkZWQyZjQzMWIwZjQ0NDcyNQ==",
      "commit": {
        "author": {
          "name": "Alex Rickabaugh",
          "email": "alx+alxhub@alxandria.net",
          "date": "2019-12-17T19:53:55Z"
        },
        "committer": {
          "name": "Kara Erickson",
          "email": "karakara@google.com",
          "date": "2019-12-18T23:04:49Z"
        },
        "message": "fix(ivy): don't produce template diagnostics when scope is invalid (#34460)\n\nPreviously, ngtsc would perform scope analysis (which directives/pipes are\navailable inside a component's template) and template type-checking of that\ntemplate as separate steps. If a component's scope was somehow invalid (e.g.\nits NgModule imported something which wasn't another NgModule), the\ncomponent was treated as not having a scope. This meant that during template\ntype-checking, errors would be produced for any invalid expressions/usage of\nother components that should have been in the scope.\n\nThis commit changes ngtsc to skip template type-checking of a component if\nits scope is erroneous (as opposed to not present in the first place). Thus,\nusers aren't overwhelmed with diagnostic errors for the template and are\nonly informed of the root cause of the problem: an invalid NgModule scope.\n\nFixes #33849\n\nPR Close #34460",
        "tree": {
          "sha": "f601f2ea2ff98a312e40bc742734936c537375b1",
          "url": "https://api.github.com/repos/angular/angular/git/trees/f601f2ea2ff98a312e40bc742734936c537375b1"
        },
        "url": "https://api.github.com/repos/angular/angular/git/commits/498a2ffba37b97247ecb996ded2f431b0f444725",
        "comment_count": 0,
        "verification": {
          "verified": false,
          "reason": "unsigned",
          "signature": null,
          "payload": null
        }
      },
      "url": "https://api.github.com/repos/angular/angular/commits/498a2ffba37b97247ecb996ded2f431b0f444725",
      "html_url": "https://github.com/angular/angular/commit/498a2ffba37b97247ecb996ded2f431b0f444725",
      "comments_url": "https://api.github.com/repos/angular/angular/commits/498a2ffba37b97247ecb996ded2f431b0f444725/comments",
      "author": {
        "login": "alxhub",
        "id": 4175141,
        "node_id": "MDQ6VXNlcjQxNzUxNDE=",
        "avatar_url": "https://avatars0.githubusercontent.com/u/4175141?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/alxhub",
        "html_url": "https://github.com/alxhub",
        "followers_url": "https://api.github.com/users/alxhub/followers",
        "following_url": "https://api.github.com/users/alxhub/following{/other_user}",
        "gists_url": "https://api.github.com/users/alxhub/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/alxhub/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/alxhub/subscriptions",
        "organizations_url": "https://api.github.com/users/alxhub/orgs",
        "repos_url": "https://api.github.com/users/alxhub/repos",
        "events_url": "https://api.github.com/users/alxhub/events{/privacy}",
        "received_events_url": "https://api.github.com/users/alxhub/received_events",
        "type": "User",
        "site_admin": false
      },
      "committer": {
        "login": "kara",
        "id": 3871688,
        "node_id": "MDQ6VXNlcjM4NzE2ODg=",
        "avatar_url": "https://avatars3.githubusercontent.com/u/3871688?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/kara",
        "html_url": "https://github.com/kara",
        "followers_url": "https://api.github.com/users/kara/followers",
        "following_url": "https://api.github.com/users/kara/following{/other_user}",
        "gists_url": "https://api.github.com/users/kara/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/kara/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/kara/subscriptions",
        "organizations_url": "https://api.github.com/users/kara/orgs",
        "repos_url": "https://api.github.com/users/kara/repos",
        "events_url": "https://api.github.com/users/kara/events{/privacy}",
        "received_events_url": "https://api.github.com/users/kara/received_events",
        "type": "User",
        "site_admin": false
      },
      "parents": [
        {
          "sha": "047488c5d86b39b87d3d7497c5ff720d2adf81c3",
          "url": "https://api.github.com/repos/angular/angular/commits/047488c5d86b39b87d3d7497c5ff720d2adf81c3",
          "html_url": "https://github.com/angular/angular/commit/047488c5d86b39b87d3d7497c5ff720d2adf81c3"
        }
      ]
    },
    {
      "sha": "047488c5d86b39b87d3d7497c5ff720d2adf81c3",
      "node_id": "MDY6Q29tbWl0MjQxOTUzMzk6MDQ3NDg4YzVkODZiMzliODdkM2Q3NDk3YzVmZjcyMGQyYWRmODFjMw==",
      "commit": {
        "author": {
          "name": "Alex Rickabaugh",
          "email": "alx+alxhub@alxandria.net",
          "date": "2019-12-17T21:29:15Z"
        },
        "committer": {
          "name": "Kara Erickson",
          "email": "karakara@google.com",
          "date": "2019-12-18T23:04:49Z"
        },
        "message": "refactor(ivy): move NgModule declaration checks to the 'scope' package (#34460)\n\nPreviously each NgModule trait checked its own scope for valid declarations\nduring 'resolve'. This worked, but caused the LocalModuleScopeRegistry to\ndeclare that NgModule scopes were valid even if they contained invalid\ndeclarations.\n\nThis commit moves the generation of diagnostic errors to the\nLocalModuleScopeRegistry where it belongs. Now the registry can consider an\nNgModule's scope to be invalid if it contains invalid declarations.\n\nPR Close #34460",
        "tree": {
          "sha": "7e2ec78c75443175ae243b45f6b10e7fff8d21e2",
          "url": "https://api.github.com/repos/angular/angular/git/trees/7e2ec78c75443175ae243b45f6b10e7fff8d21e2"
        },
        "url": "https://api.github.com/repos/angular/angular/git/commits/047488c5d86b39b87d3d7497c5ff720d2adf81c3",
        "comment_count": 0,
        "verification": {
          "verified": false,
          "reason": "unsigned",
          "signature": null,
          "payload": null
        }
      },
      "url": "https://api.github.com/repos/angular/angular/commits/047488c5d86b39b87d3d7497c5ff720d2adf81c3",
      "html_url": "https://github.com/angular/angular/commit/047488c5d86b39b87d3d7497c5ff720d2adf81c3",
      "comments_url": "https://api.github.com/repos/angular/angular/commits/047488c5d86b39b87d3d7497c5ff720d2adf81c3/comments",
      "author": {
        "login": "alxhub",
        "id": 4175141,
        "node_id": "MDQ6VXNlcjQxNzUxNDE=",
        "avatar_url": "https://avatars0.githubusercontent.com/u/4175141?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/alxhub",
        "html_url": "https://github.com/alxhub",
        "followers_url": "https://api.github.com/users/alxhub/followers",
        "following_url": "https://api.github.com/users/alxhub/following{/other_user}",
        "gists_url": "https://api.github.com/users/alxhub/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/alxhub/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/alxhub/subscriptions",
        "organizations_url": "https://api.github.com/users/alxhub/orgs",
        "repos_url": "https://api.github.com/users/alxhub/repos",
        "events_url": "https://api.github.com/users/alxhub/events{/privacy}",
        "received_events_url": "https://api.github.com/users/alxhub/received_events",
        "type": "User",
        "site_admin": false
      },
      "committer": {
        "login": "kara",
        "id": 3871688,
        "node_id": "MDQ6VXNlcjM4NzE2ODg=",
        "avatar_url": "https://avatars3.githubusercontent.com/u/3871688?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/kara",
        "html_url": "https://github.com/kara",
        "followers_url": "https://api.github.com/users/kara/followers",
        "following_url": "https://api.github.com/users/kara/following{/other_user}",
        "gists_url": "https://api.github.com/users/kara/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/kara/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/kara/subscriptions",
        "organizations_url": "https://api.github.com/users/kara/orgs",
        "repos_url": "https://api.github.com/users/kara/repos",
        "events_url": "https://api.github.com/users/kara/events{/privacy}",
        "received_events_url": "https://api.github.com/users/kara/received_events",
        "type": "User",
        "site_admin": false
      },
      "parents": [
        {
          "sha": "3959511b80ff8abb55b8c8858a6080472bff1589",
          "url": "https://api.github.com/repos/angular/angular/commits/3959511b80ff8abb55b8c8858a6080472bff1589",
          "html_url": "https://github.com/angular/angular/commit/3959511b80ff8abb55b8c8858a6080472bff1589"
        }
      ]
    },
    {
      "sha": "3959511b80ff8abb55b8c8858a6080472bff1589",
      "node_id": "MDY6Q29tbWl0MjQxOTUzMzk6Mzk1OTUxMWI4MGZmOGFiYjU1YjhjODg1OGE2MDgwNDcyYmZmMTU4OQ==",
      "commit": {
        "author": {
          "name": "JoostK",
          "email": "joost.koehoorn@gmail.com",
          "date": "2019-12-15T19:53:36Z"
        },
        "committer": {
          "name": "Kara Erickson",
          "email": "karakara@google.com",
          "date": "2019-12-18T22:44:42Z"
        },
        "message": "fix(ivy): avoid duplicate errors in safe navigations and template guards (#34417)\n\nThe template type checker generates TypeScript expressions for any\nexpression that occurs in a template, so that TypeScript can check it\nand produce errors. Some expressions as they occur in a template may be\ntranslated into TypeScript code multiple times, for instance a binding\nto a directive input that has a template guard.\n\nOne example would be the `NgIf` directive, which has a template guard to\nnarrow the type in the template as appropriate. Given the following\ntemplate:\n\n```typescript\n@Component({\n  template: '<div *ngIf=\"person\">{{ person.name }}</div>'\n})\nclass AppComponent {\n  person?: { name: string };\n}\n```\n\nA type check block (TCB) with roughly the following structure is\ncreated:\n\n```typescript\nfunction tcb(ctx: AppComponent) {\n  const t1 = NgIf.ngTypeCtor({ ngIf: ctx.person });\n  if (ctx.person) {\n    \"\" + ctx.person.name;\n  }\n}\n```\n\nNotice how the `*ngIf=\"person\"` binding is present twice: once in the\ntype constructor call and once in the `if` guard. As such, TypeScript\nwill check both instances and would produce duplicate errors, if any\nwere found.\n\nAnother instance is when the safe navigation operator is used, where an\nexpression such as `person?.name` is emitted into the TCB as\n`person != null ? person!.name : undefined`. As can be seen, the\nleft-hand side expression `person` occurs twice in the TCB.\n\nThis commit adds the ability to insert markers into the TCB that\nindicate that any errors within the expression should be ignored. This\nis similar to `@ts-ignore`, however it can be applied more granularly.\n\nPR Close #34417",
        "tree": {
          "sha": "08d845e32a93b6651cee549449aefd7bb6b060fc",
          "url": "https://api.github.com/repos/angular/angular/git/trees/08d845e32a93b6651cee549449aefd7bb6b060fc"
        },
        "url": "https://api.github.com/repos/angular/angular/git/commits/3959511b80ff8abb55b8c8858a6080472bff1589",
        "comment_count": 0,
        "verification": {
          "verified": false,
          "reason": "unsigned",
          "signature": null,
          "payload": null
        }
      },
      "url": "https://api.github.com/repos/angular/angular/commits/3959511b80ff8abb55b8c8858a6080472bff1589",
      "html_url": "https://github.com/angular/angular/commit/3959511b80ff8abb55b8c8858a6080472bff1589",
      "comments_url": "https://api.github.com/repos/angular/angular/commits/3959511b80ff8abb55b8c8858a6080472bff1589/comments",
      "author": {
        "login": "JoostK",
        "id": 123679,
        "node_id": "MDQ6VXNlcjEyMzY3OQ==",
        "avatar_url": "https://avatars3.githubusercontent.com/u/123679?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/JoostK",
        "html_url": "https://github.com/JoostK",
        "followers_url": "https://api.github.com/users/JoostK/followers",
        "following_url": "https://api.github.com/users/JoostK/following{/other_user}",
        "gists_url": "https://api.github.com/users/JoostK/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/JoostK/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/JoostK/subscriptions",
        "organizations_url": "https://api.github.com/users/JoostK/orgs",
        "repos_url": "https://api.github.com/users/JoostK/repos",
        "events_url": "https://api.github.com/users/JoostK/events{/privacy}",
        "received_events_url": "https://api.github.com/users/JoostK/received_events",
        "type": "User",
        "site_admin": false
      },
      "committer": {
        "login": "kara",
        "id": 3871688,
        "node_id": "MDQ6VXNlcjM4NzE2ODg=",
        "avatar_url": "https://avatars3.githubusercontent.com/u/3871688?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/kara",
        "html_url": "https://github.com/kara",
        "followers_url": "https://api.github.com/users/kara/followers",
        "following_url": "https://api.github.com/users/kara/following{/other_user}",
        "gists_url": "https://api.github.com/users/kara/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/kara/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/kara/subscriptions",
        "organizations_url": "https://api.github.com/users/kara/orgs",
        "repos_url": "https://api.github.com/users/kara/repos",
        "events_url": "https://api.github.com/users/kara/events{/privacy}",
        "received_events_url": "https://api.github.com/users/kara/received_events",
        "type": "User",
        "site_admin": false
      },
      "parents": [
        {
          "sha": "024e3b30ac4d87bb2350c9502d07ac5a6278fcc9",
          "url": "https://api.github.com/repos/angular/angular/commits/024e3b30ac4d87bb2350c9502d07ac5a6278fcc9",
          "html_url": "https://github.com/angular/angular/commit/024e3b30ac4d87bb2350c9502d07ac5a6278fcc9"
        }
      ]
    },
    {
      "sha": "024e3b30ac4d87bb2350c9502d07ac5a6278fcc9",
      "node_id": "MDY6Q29tbWl0MjQxOTUzMzk6MDI0ZTNiMzBhYzRkODdiYjIzNTBjOTUwMmQwN2FjNWE2Mjc4ZmNjOQ==",
      "commit": {
        "author": {
          "name": "JoostK",
          "email": "joost.koehoorn@gmail.com",
          "date": "2019-12-15T14:12:14Z"
        },
        "committer": {
          "name": "Kara Erickson",
          "email": "karakara@google.com",
          "date": "2019-12-18T22:44:42Z"
        },
        "message": "refactor(ivy): cleanup translation of source spans in type checker (#34417)\n\nThis commit cleans up the template type checker regarding how\ndiagnostics are produced.\n\nPR Close #34417",
        "tree": {
          "sha": "7fb30d7fa755429226103ea4305a4e56b4c18681",
          "url": "https://api.github.com/repos/angular/angular/git/trees/7fb30d7fa755429226103ea4305a4e56b4c18681"
        },
        "url": "https://api.github.com/repos/angular/angular/git/commits/024e3b30ac4d87bb2350c9502d07ac5a6278fcc9",
        "comment_count": 0,
        "verification": {
          "verified": false,
          "reason": "unsigned",
          "signature": null,
          "payload": null
        }
      },
      "url": "https://api.github.com/repos/angular/angular/commits/024e3b30ac4d87bb2350c9502d07ac5a6278fcc9",
      "html_url": "https://github.com/angular/angular/commit/024e3b30ac4d87bb2350c9502d07ac5a6278fcc9",
      "comments_url": "https://api.github.com/repos/angular/angular/commits/024e3b30ac4d87bb2350c9502d07ac5a6278fcc9/comments",
      "author": {
        "login": "JoostK",
        "id": 123679,
        "node_id": "MDQ6VXNlcjEyMzY3OQ==",
        "avatar_url": "https://avatars3.githubusercontent.com/u/123679?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/JoostK",
        "html_url": "https://github.com/JoostK",
        "followers_url": "https://api.github.com/users/JoostK/followers",
        "following_url": "https://api.github.com/users/JoostK/following{/other_user}",
        "gists_url": "https://api.github.com/users/JoostK/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/JoostK/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/JoostK/subscriptions",
        "organizations_url": "https://api.github.com/users/JoostK/orgs",
        "repos_url": "https://api.github.com/users/JoostK/repos",
        "events_url": "https://api.github.com/users/JoostK/events{/privacy}",
        "received_events_url": "https://api.github.com/users/JoostK/received_events",
        "type": "User",
        "site_admin": false
      },
      "committer": {
        "login": "kara",
        "id": 3871688,
        "node_id": "MDQ6VXNlcjM4NzE2ODg=",
        "avatar_url": "https://avatars3.githubusercontent.com/u/3871688?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/kara",
        "html_url": "https://github.com/kara",
        "followers_url": "https://api.github.com/users/kara/followers",
        "following_url": "https://api.github.com/users/kara/following{/other_user}",
        "gists_url": "https://api.github.com/users/kara/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/kara/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/kara/subscriptions",
        "organizations_url": "https://api.github.com/users/kara/orgs",
        "repos_url": "https://api.github.com/users/kara/repos",
        "events_url": "https://api.github.com/users/kara/events{/privacy}",
        "received_events_url": "https://api.github.com/users/kara/received_events",
        "type": "User",
        "site_admin": false
      },
      "parents": [
        {
          "sha": "8c6468a02541697c24634d6a65ff23959494a5f1",
          "url": "https://api.github.com/repos/angular/angular/commits/8c6468a02541697c24634d6a65ff23959494a5f1",
          "html_url": "https://github.com/angular/angular/commit/8c6468a02541697c24634d6a65ff23959494a5f1"
        }
      ]
    },
    {
      "sha": "8c6468a02541697c24634d6a65ff23959494a5f1",
      "node_id": "MDY6Q29tbWl0MjQxOTUzMzk6OGM2NDY4YTAyNTQxNjk3YzI0NjM0ZDZhNjVmZjIzOTU5NDk0YTVmMQ==",
      "commit": {
        "author": {
          "name": "JoostK",
          "email": "joost.koehoorn@gmail.com",
          "date": "2019-12-15T13:28:51Z"
        },
        "committer": {
          "name": "Kara Erickson",
          "email": "karakara@google.com",
          "date": "2019-12-18T22:44:42Z"
        },
        "message": "refactor(ivy): use absolute source spans in type checker (#34417)\n\nPreviously, the type checker would compute an absolute source span by\ncombining an expression AST node's `ParseSpan` (relative to the start of\nthe expression) together with the absolute offset of the expression as\nrepresented in a `ParseSourceSpan`, to arrive at a span relative to the\nstart of the file. This information is now directly available on an\nexpression AST node in the `AST.sourceSpan` property, which can be used\ninstead.\n\nPR Close #34417",
        "tree": {
          "sha": "c5adb0c8eb1f196f8aa9a0dac942fe0b338773c0",
          "url": "https://api.github.com/repos/angular/angular/git/trees/c5adb0c8eb1f196f8aa9a0dac942fe0b338773c0"
        },
        "url": "https://api.github.com/repos/angular/angular/git/commits/8c6468a02541697c24634d6a65ff23959494a5f1",
        "comment_count": 0,
        "verification": {
          "verified": false,
          "reason": "unsigned",
          "signature": null,
          "payload": null
        }
      },
      "url": "https://api.github.com/repos/angular/angular/commits/8c6468a02541697c24634d6a65ff23959494a5f1",
      "html_url": "https://github.com/angular/angular/commit/8c6468a02541697c24634d6a65ff23959494a5f1",
      "comments_url": "https://api.github.com/repos/angular/angular/commits/8c6468a02541697c24634d6a65ff23959494a5f1/comments",
      "author": {
        "login": "JoostK",
        "id": 123679,
        "node_id": "MDQ6VXNlcjEyMzY3OQ==",
        "avatar_url": "https://avatars3.githubusercontent.com/u/123679?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/JoostK",
        "html_url": "https://github.com/JoostK",
        "followers_url": "https://api.github.com/users/JoostK/followers",
        "following_url": "https://api.github.com/users/JoostK/following{/other_user}",
        "gists_url": "https://api.github.com/users/JoostK/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/JoostK/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/JoostK/subscriptions",
        "organizations_url": "https://api.github.com/users/JoostK/orgs",
        "repos_url": "https://api.github.com/users/JoostK/repos",
        "events_url": "https://api.github.com/users/JoostK/events{/privacy}",
        "received_events_url": "https://api.github.com/users/JoostK/received_events",
        "type": "User",
        "site_admin": false
      },
      "committer": {
        "login": "kara",
        "id": 3871688,
        "node_id": "MDQ6VXNlcjM4NzE2ODg=",
        "avatar_url": "https://avatars3.githubusercontent.com/u/3871688?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/kara",
        "html_url": "https://github.com/kara",
        "followers_url": "https://api.github.com/users/kara/followers",
        "following_url": "https://api.github.com/users/kara/following{/other_user}",
        "gists_url": "https://api.github.com/users/kara/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/kara/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/kara/subscriptions",
        "organizations_url": "https://api.github.com/users/kara/orgs",
        "repos_url": "https://api.github.com/users/kara/repos",
        "events_url": "https://api.github.com/users/kara/events{/privacy}",
        "received_events_url": "https://api.github.com/users/kara/received_events",
        "type": "User",
        "site_admin": false
      },
      "parents": [
        {
          "sha": "23595272fe3aad8611909e69264f2ce4a96f8cbd",
          "url": "https://api.github.com/repos/angular/angular/commits/23595272fe3aad8611909e69264f2ce4a96f8cbd",
          "html_url": "https://github.com/angular/angular/commit/23595272fe3aad8611909e69264f2ce4a96f8cbd"
        }
      ]
    },
    {
      "sha": "23595272fe3aad8611909e69264f2ce4a96f8cbd",
      "node_id": "MDY6Q29tbWl0MjQxOTUzMzk6MjM1OTUyNzJmZTNhYWQ4NjExOTA5ZTY5MjY0ZjJjZTRhOTZmOGNiZA==",
      "commit": {
        "author": {
          "name": "Paul Gschwendtner",
          "email": "paulgschwendtner@gmail.com",
          "date": "2019-12-18T16:41:24Z"
        },
        "committer": {
          "name": "Kara Erickson",
          "email": "karakara@google.com",
          "date": "2019-12-18T19:28:48Z"
        },
        "message": "build: use vendored yarn version for bazel node toolchain (#34472)\n\nInstead of downloading Yarn separately for Bazel, we could use\nour existing copy of Yarn that we maintain for CI jobs that do\nnot use Bazel. This ensures we use consistent versions of Yarn\nacross our CI jobs, and also avoids unnecessary downloads to the\nBazel mirror server, or Yarn download servers.\n\nPR Close #34472",
        "tree": {
          "sha": "3d2cb9319d4f6171b935fa5cb00c15f0844297e8",
          "url": "https://api.github.com/repos/angular/angular/git/trees/3d2cb9319d4f6171b935fa5cb00c15f0844297e8"
        },
        "url": "https://api.github.com/repos/angular/angular/git/commits/23595272fe3aad8611909e69264f2ce4a96f8cbd",
        "comment_count": 0,
        "verification": {
          "verified": false,
          "reason": "unsigned",
          "signature": null,
          "payload": null
        }
      },
      "url": "https://api.github.com/repos/angular/angular/commits/23595272fe3aad8611909e69264f2ce4a96f8cbd",
      "html_url": "https://github.com/angular/angular/commit/23595272fe3aad8611909e69264f2ce4a96f8cbd",
      "comments_url": "https://api.github.com/repos/angular/angular/commits/23595272fe3aad8611909e69264f2ce4a96f8cbd/comments",
      "author": {
        "login": "devversion",
        "id": 4987015,
        "node_id": "MDQ6VXNlcjQ5ODcwMTU=",
        "avatar_url": "https://avatars3.githubusercontent.com/u/4987015?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/devversion",
        "html_url": "https://github.com/devversion",
        "followers_url": "https://api.github.com/users/devversion/followers",
        "following_url": "https://api.github.com/users/devversion/following{/other_user}",
        "gists_url": "https://api.github.com/users/devversion/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/devversion/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/devversion/subscriptions",
        "organizations_url": "https://api.github.com/users/devversion/orgs",
        "repos_url": "https://api.github.com/users/devversion/repos",
        "events_url": "https://api.github.com/users/devversion/events{/privacy}",
        "received_events_url": "https://api.github.com/users/devversion/received_events",
        "type": "User",
        "site_admin": false
      },
      "committer": {
        "login": "kara",
        "id": 3871688,
        "node_id": "MDQ6VXNlcjM4NzE2ODg=",
        "avatar_url": "https://avatars3.githubusercontent.com/u/3871688?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/kara",
        "html_url": "https://github.com/kara",
        "followers_url": "https://api.github.com/users/kara/followers",
        "following_url": "https://api.github.com/users/kara/following{/other_user}",
        "gists_url": "https://api.github.com/users/kara/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/kara/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/kara/subscriptions",
        "organizations_url": "https://api.github.com/users/kara/orgs",
        "repos_url": "https://api.github.com/users/kara/repos",
        "events_url": "https://api.github.com/users/kara/events{/privacy}",
        "received_events_url": "https://api.github.com/users/kara/received_events",
        "type": "User",
        "site_admin": false
      },
      "parents": [
        {
          "sha": "9264f43511a14e72058951dc1ee7597a5b554388",
          "url": "https://api.github.com/repos/angular/angular/commits/9264f43511a14e72058951dc1ee7597a5b554388",
          "html_url": "https://github.com/angular/angular/commit/9264f43511a14e72058951dc1ee7597a5b554388"
        }
      ]
    },
    {
      "sha": "9264f43511a14e72058951dc1ee7597a5b554388",
      "node_id": "MDY6Q29tbWl0MjQxOTUzMzk6OTI2NGY0MzUxMWExNGU3MjA1ODk1MWRjMWVlNzU5N2E1YjU1NDM4OA==",
      "commit": {
        "author": {
          "name": "Pete Bacon Darwin",
          "email": "pete@bacondarwin.com",
          "date": "2019-12-18T14:03:05Z"
        },
        "committer": {
          "name": "Kara Erickson",
          "email": "karakara@google.com",
          "date": "2019-12-18T19:25:01Z"
        },
        "message": "refactor(ngcc): remove private declaration aliases (#34254)\n\nNow that the source to typings matching is able to handle\naliasing of exports, there is no need to handle aliases in private\ndeclarations analysis.\n\nThese were originally added to cope when the typings files had\nto use the name that the original source files used when exporting.\n\nPR Close #34254",
        "tree": {
          "sha": "d750c225d5f3580db7f2f94e8a27463b77679dcd",
          "url": "https://api.github.com/repos/angular/angular/git/trees/d750c225d5f3580db7f2f94e8a27463b77679dcd"
        },
        "url": "https://api.github.com/repos/angular/angular/git/commits/9264f43511a14e72058951dc1ee7597a5b554388",
        "comment_count": 0,
        "verification": {
          "verified": false,
          "reason": "unsigned",
          "signature": null,
          "payload": null
        }
      },
      "url": "https://api.github.com/repos/angular/angular/commits/9264f43511a14e72058951dc1ee7597a5b554388",
      "html_url": "https://github.com/angular/angular/commit/9264f43511a14e72058951dc1ee7597a5b554388",
      "comments_url": "https://api.github.com/repos/angular/angular/commits/9264f43511a14e72058951dc1ee7597a5b554388/comments",
      "author": {
        "login": "petebacondarwin",
        "id": 15655,
        "node_id": "MDQ6VXNlcjE1NjU1",
        "avatar_url": "https://avatars0.githubusercontent.com/u/15655?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/petebacondarwin",
        "html_url": "https://github.com/petebacondarwin",
        "followers_url": "https://api.github.com/users/petebacondarwin/followers",
        "following_url": "https://api.github.com/users/petebacondarwin/following{/other_user}",
        "gists_url": "https://api.github.com/users/petebacondarwin/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/petebacondarwin/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/petebacondarwin/subscriptions",
        "organizations_url": "https://api.github.com/users/petebacondarwin/orgs",
        "repos_url": "https://api.github.com/users/petebacondarwin/repos",
        "events_url": "https://api.github.com/users/petebacondarwin/events{/privacy}",
        "received_events_url": "https://api.github.com/users/petebacondarwin/received_events",
        "type": "User",
        "site_admin": false
      },
      "committer": {
        "login": "kara",
        "id": 3871688,
        "node_id": "MDQ6VXNlcjM4NzE2ODg=",
        "avatar_url": "https://avatars3.githubusercontent.com/u/3871688?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/kara",
        "html_url": "https://github.com/kara",
        "followers_url": "https://api.github.com/users/kara/followers",
        "following_url": "https://api.github.com/users/kara/following{/other_user}",
        "gists_url": "https://api.github.com/users/kara/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/kara/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/kara/subscriptions",
        "organizations_url": "https://api.github.com/users/kara/orgs",
        "repos_url": "https://api.github.com/users/kara/repos",
        "events_url": "https://api.github.com/users/kara/events{/privacy}",
        "received_events_url": "https://api.github.com/users/kara/received_events",
        "type": "User",
        "site_admin": false
      },
      "parents": [
        {
          "sha": "918d8c990904b35ba67ea60c4b985f22fab1e853",
          "url": "https://api.github.com/repos/angular/angular/commits/918d8c990904b35ba67ea60c4b985f22fab1e853",
          "html_url": "https://github.com/angular/angular/commit/918d8c990904b35ba67ea60c4b985f22fab1e853"
        }
      ]
    },
    {
      "sha": "918d8c990904b35ba67ea60c4b985f22fab1e853",
      "node_id": "MDY6Q29tbWl0MjQxOTUzMzk6OTE4ZDhjOTkwOTA0YjM1YmE2N2VhNjBjNGI5ODVmMjJmYWIxZTg1Mw==",
      "commit": {
        "author": {
          "name": "Pete Bacon Darwin",
          "email": "pete@bacondarwin.com",
          "date": "2019-12-18T14:03:05Z"
        },
        "committer": {
          "name": "Kara Erickson",
          "email": "karakara@google.com",
          "date": "2019-12-18T19:25:01Z"
        },
        "message": "refactor(ngcc): slightly improve the info in error messages (#34254)\n\nPR Close #34254",
        "tree": {
          "sha": "2967cd33aca93df858188409c2f3313427204ea6",
          "url": "https://api.github.com/repos/angular/angular/git/trees/2967cd33aca93df858188409c2f3313427204ea6"
        },
        "url": "https://api.github.com/repos/angular/angular/git/commits/918d8c990904b35ba67ea60c4b985f22fab1e853",
        "comment_count": 0,
        "verification": {
          "verified": false,
          "reason": "unsigned",
          "signature": null,
          "payload": null
        }
      },
      "url": "https://api.github.com/repos/angular/angular/commits/918d8c990904b35ba67ea60c4b985f22fab1e853",
      "html_url": "https://github.com/angular/angular/commit/918d8c990904b35ba67ea60c4b985f22fab1e853",
      "comments_url": "https://api.github.com/repos/angular/angular/commits/918d8c990904b35ba67ea60c4b985f22fab1e853/comments",
      "author": {
        "login": "petebacondarwin",
        "id": 15655,
        "node_id": "MDQ6VXNlcjE1NjU1",
        "avatar_url": "https://avatars0.githubusercontent.com/u/15655?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/petebacondarwin",
        "html_url": "https://github.com/petebacondarwin",
        "followers_url": "https://api.github.com/users/petebacondarwin/followers",
        "following_url": "https://api.github.com/users/petebacondarwin/following{/other_user}",
        "gists_url": "https://api.github.com/users/petebacondarwin/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/petebacondarwin/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/petebacondarwin/subscriptions",
        "organizations_url": "https://api.github.com/users/petebacondarwin/orgs",
        "repos_url": "https://api.github.com/users/petebacondarwin/repos",
        "events_url": "https://api.github.com/users/petebacondarwin/events{/privacy}",
        "received_events_url": "https://api.github.com/users/petebacondarwin/received_events",
        "type": "User",
        "site_admin": false
      },
      "committer": {
        "login": "kara",
        "id": 3871688,
        "node_id": "MDQ6VXNlcjM4NzE2ODg=",
        "avatar_url": "https://avatars3.githubusercontent.com/u/3871688?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/kara",
        "html_url": "https://github.com/kara",
        "followers_url": "https://api.github.com/users/kara/followers",
        "following_url": "https://api.github.com/users/kara/following{/other_user}",
        "gists_url": "https://api.github.com/users/kara/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/kara/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/kara/subscriptions",
        "organizations_url": "https://api.github.com/users/kara/orgs",
        "repos_url": "https://api.github.com/users/kara/repos",
        "events_url": "https://api.github.com/users/kara/events{/privacy}",
        "received_events_url": "https://api.github.com/users/kara/received_events",
        "type": "User",
        "site_admin": false
      },
      "parents": [
        {
          "sha": "31be29a9f302fee7184d1824634d98e03df9caf2",
          "url": "https://api.github.com/repos/angular/angular/commits/31be29a9f302fee7184d1824634d98e03df9caf2",
          "html_url": "https://github.com/angular/angular/commit/31be29a9f302fee7184d1824634d98e03df9caf2"
        }
      ]
    },
    {
      "sha": "31be29a9f302fee7184d1824634d98e03df9caf2",
      "node_id": "MDY6Q29tbWl0MjQxOTUzMzk6MzFiZTI5YTlmMzAyZmVlNzE4NGQxODI0NjM0ZDk4ZTAzZGY5Y2FmMg==",
      "commit": {
        "author": {
          "name": "Pete Bacon Darwin",
          "email": "pete@bacondarwin.com",
          "date": "2019-12-18T14:03:05Z"
        },
        "committer": {
          "name": "Kara Erickson",
          "email": "karakara@google.com",
          "date": "2019-12-18T19:25:01Z"
        },
        "message": "fix(ngcc): use the correct identifiers when updating typings files (#34254)\n\nPreviously the identifiers used in the typings files were the same as\nthose used in the source files.\n\nWhen the typings files and the source files do not match exactly, e.g.\nwhen one of them is flattened, while the other is a deep tree, it is\npossible for identifiers to be renamed.\n\nThis commit ensures that the correct identifier is used in typings files\nwhen the typings file does not export the same name as the source file.\n\nFixes https://github.com/angular/ngcc-validation/pull/608\n\nPR Close #34254",
        "tree": {
          "sha": "01867a10eeef27244a60e366ce73e4246cd0d855",
          "url": "https://api.github.com/repos/angular/angular/git/trees/01867a10eeef27244a60e366ce73e4246cd0d855"
        },
        "url": "https://api.github.com/repos/angular/angular/git/commits/31be29a9f302fee7184d1824634d98e03df9caf2",
        "comment_count": 0,
        "verification": {
          "verified": false,
          "reason": "unsigned",
          "signature": null,
          "payload": null
        }
      },
      "url": "https://api.github.com/repos/angular/angular/commits/31be29a9f302fee7184d1824634d98e03df9caf2",
      "html_url": "https://github.com/angular/angular/commit/31be29a9f302fee7184d1824634d98e03df9caf2",
      "comments_url": "https://api.github.com/repos/angular/angular/commits/31be29a9f302fee7184d1824634d98e03df9caf2/comments",
      "author": {
        "login": "petebacondarwin",
        "id": 15655,
        "node_id": "MDQ6VXNlcjE1NjU1",
        "avatar_url": "https://avatars0.githubusercontent.com/u/15655?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/petebacondarwin",
        "html_url": "https://github.com/petebacondarwin",
        "followers_url": "https://api.github.com/users/petebacondarwin/followers",
        "following_url": "https://api.github.com/users/petebacondarwin/following{/other_user}",
        "gists_url": "https://api.github.com/users/petebacondarwin/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/petebacondarwin/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/petebacondarwin/subscriptions",
        "organizations_url": "https://api.github.com/users/petebacondarwin/orgs",
        "repos_url": "https://api.github.com/users/petebacondarwin/repos",
        "events_url": "https://api.github.com/users/petebacondarwin/events{/privacy}",
        "received_events_url": "https://api.github.com/users/petebacondarwin/received_events",
        "type": "User",
        "site_admin": false
      },
      "committer": {
        "login": "kara",
        "id": 3871688,
        "node_id": "MDQ6VXNlcjM4NzE2ODg=",
        "avatar_url": "https://avatars3.githubusercontent.com/u/3871688?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/kara",
        "html_url": "https://github.com/kara",
        "followers_url": "https://api.github.com/users/kara/followers",
        "following_url": "https://api.github.com/users/kara/following{/other_user}",
        "gists_url": "https://api.github.com/users/kara/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/kara/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/kara/subscriptions",
        "organizations_url": "https://api.github.com/users/kara/orgs",
        "repos_url": "https://api.github.com/users/kara/repos",
        "events_url": "https://api.github.com/users/kara/events{/privacy}",
        "received_events_url": "https://api.github.com/users/kara/received_events",
        "type": "User",
        "site_admin": false
      },
      "parents": [
        {
          "sha": "f22a6eb00ea91037656753971ddaa9ad8554d3ec",
          "url": "https://api.github.com/repos/angular/angular/commits/f22a6eb00ea91037656753971ddaa9ad8554d3ec",
          "html_url": "https://github.com/angular/angular/commit/f22a6eb00ea91037656753971ddaa9ad8554d3ec"
        }
      ]
    },
    {
      "sha": "f22a6eb00ea91037656753971ddaa9ad8554d3ec",
      "node_id": "MDY6Q29tbWl0MjQxOTUzMzk6ZjIyYTZlYjAwZWE5MTAzNzY1Njc1Mzk3MWRkYWE5YWQ4NTU0ZDNlYw==",
      "commit": {
        "author": {
          "name": "Pete Bacon Darwin",
          "email": "pete@bacondarwin.com",
          "date": "2019-12-18T14:03:05Z"
        },
        "committer": {
          "name": "Kara Erickson",
          "email": "karakara@google.com",
          "date": "2019-12-18T19:25:01Z"
        },
        "message": "fix(ngcc): correctly match aliased classes between src and dts files (#34254)\n\nThe naïve matching algorithm we previously used to match declarations in\nsource files to declarations in typings files was based only on the name\nof the thing being declared.  This did not handle cases where the declared\nitem had been exported via an alias - a common scenario when one of the two\nfile sets (source or typings) has been flattened, while the other has not.\n\nThe new algorithm tries to overcome this by creating two maps of export\nname to declaration (i.e. `Map<string, ts.Declaration>`).\nOne for the source files and one for the typings files.\nIt then joins these two together by matching export names, resulting in a\nnew map that maps source declarations to typings declarations directly\n(i.e. `Map<ts.Declaration, ts.Declaration>`).\n\nThis new map can handle the declaration names being different between the\nsource and typings as long as they are ultimately both exported with the\nsame alias name.\n\nFurther more, there is one map for \"public exports\", i.e. exported via the\nroot of the source tree (the entry-point), and another map for \"private\nexports\", which are exported from individual files in the source tree but\nnot necessarily from the root. This second map can be used to \"guess\"\nthe mapping between exports in a deep (non-flat) file tree, which can be\nused by ngcc to add required private exports to the entry-point.\n\nFixes #33593\n\nPR Close #34254",
        "tree": {
          "sha": "2d6e7e5bb83c98f6131d003d4b6038e6491a3eb2",
          "url": "https://api.github.com/repos/angular/angular/git/trees/2d6e7e5bb83c98f6131d003d4b6038e6491a3eb2"
        },
        "url": "https://api.github.com/repos/angular/angular/git/commits/f22a6eb00ea91037656753971ddaa9ad8554d3ec",
        "comment_count": 0,
        "verification": {
          "verified": false,
          "reason": "unsigned",
          "signature": null,
          "payload": null
        }
      },
      "url": "https://api.github.com/repos/angular/angular/commits/f22a6eb00ea91037656753971ddaa9ad8554d3ec",
      "html_url": "https://github.com/angular/angular/commit/f22a6eb00ea91037656753971ddaa9ad8554d3ec",
      "comments_url": "https://api.github.com/repos/angular/angular/commits/f22a6eb00ea91037656753971ddaa9ad8554d3ec/comments",
      "author": {
        "login": "petebacondarwin",
        "id": 15655,
        "node_id": "MDQ6VXNlcjE1NjU1",
        "avatar_url": "https://avatars0.githubusercontent.com/u/15655?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/petebacondarwin",
        "html_url": "https://github.com/petebacondarwin",
        "followers_url": "https://api.github.com/users/petebacondarwin/followers",
        "following_url": "https://api.github.com/users/petebacondarwin/following{/other_user}",
        "gists_url": "https://api.github.com/users/petebacondarwin/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/petebacondarwin/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/petebacondarwin/subscriptions",
        "organizations_url": "https://api.github.com/users/petebacondarwin/orgs",
        "repos_url": "https://api.github.com/users/petebacondarwin/repos",
        "events_url": "https://api.github.com/users/petebacondarwin/events{/privacy}",
        "received_events_url": "https://api.github.com/users/petebacondarwin/received_events",
        "type": "User",
        "site_admin": false
      },
      "committer": {
        "login": "kara",
        "id": 3871688,
        "node_id": "MDQ6VXNlcjM4NzE2ODg=",
        "avatar_url": "https://avatars3.githubusercontent.com/u/3871688?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/kara",
        "html_url": "https://github.com/kara",
        "followers_url": "https://api.github.com/users/kara/followers",
        "following_url": "https://api.github.com/users/kara/following{/other_user}",
        "gists_url": "https://api.github.com/users/kara/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/kara/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/kara/subscriptions",
        "organizations_url": "https://api.github.com/users/kara/orgs",
        "repos_url": "https://api.github.com/users/kara/repos",
        "events_url": "https://api.github.com/users/kara/events{/privacy}",
        "received_events_url": "https://api.github.com/users/kara/received_events",
        "type": "User",
        "site_admin": false
      },
      "parents": [
        {
          "sha": "e9fb5fdb894b30c78e6f23f51f3a634ce325a7d0",
          "url": "https://api.github.com/repos/angular/angular/commits/e9fb5fdb894b30c78e6f23f51f3a634ce325a7d0",
          "html_url": "https://github.com/angular/angular/commit/e9fb5fdb894b30c78e6f23f51f3a634ce325a7d0"
        }
      ]
    },
    {
      "sha": "e9fb5fdb894b30c78e6f23f51f3a634ce325a7d0",
      "node_id": "MDY6Q29tbWl0MjQxOTUzMzk6ZTlmYjVmZGI4OTRiMzBjNzhlNmYyM2Y1MWYzYTYzNGNlMzI1YTdkMA==",
      "commit": {
        "author": {
          "name": "Pete Bacon Darwin",
          "email": "pete@bacondarwin.com",
          "date": "2019-12-18T14:03:05Z"
        },
        "committer": {
          "name": "Kara Erickson",
          "email": "karakara@google.com",
          "date": "2019-12-18T19:25:01Z"
        },
        "message": "fix(ngcc): handle UMD re-exports (#34254)\n\nIn TS we can re-export imports using statements of the form:\n\n```\nexport * from 'some-import';\n```\n\nThis is downleveled in UMD to:\n\n```\nfunction factory(exports, someImport) {\n  function __export(m) {\n    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];\n  }\n  __export(someImport);\n}\n```\n\nThis commit adds support for this.\n\nPR Close #34254",
        "tree": {
          "sha": "ef2ee95361729c279c33ed7d1686111df24c942b",
          "url": "https://api.github.com/repos/angular/angular/git/trees/ef2ee95361729c279c33ed7d1686111df24c942b"
        },
        "url": "https://api.github.com/repos/angular/angular/git/commits/e9fb5fdb894b30c78e6f23f51f3a634ce325a7d0",
        "comment_count": 0,
        "verification": {
          "verified": false,
          "reason": "unsigned",
          "signature": null,
          "payload": null
        }
      },
      "url": "https://api.github.com/repos/angular/angular/commits/e9fb5fdb894b30c78e6f23f51f3a634ce325a7d0",
      "html_url": "https://github.com/angular/angular/commit/e9fb5fdb894b30c78e6f23f51f3a634ce325a7d0",
      "comments_url": "https://api.github.com/repos/angular/angular/commits/e9fb5fdb894b30c78e6f23f51f3a634ce325a7d0/comments",
      "author": {
        "login": "petebacondarwin",
        "id": 15655,
        "node_id": "MDQ6VXNlcjE1NjU1",
        "avatar_url": "https://avatars0.githubusercontent.com/u/15655?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/petebacondarwin",
        "html_url": "https://github.com/petebacondarwin",
        "followers_url": "https://api.github.com/users/petebacondarwin/followers",
        "following_url": "https://api.github.com/users/petebacondarwin/following{/other_user}",
        "gists_url": "https://api.github.com/users/petebacondarwin/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/petebacondarwin/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/petebacondarwin/subscriptions",
        "organizations_url": "https://api.github.com/users/petebacondarwin/orgs",
        "repos_url": "https://api.github.com/users/petebacondarwin/repos",
        "events_url": "https://api.github.com/users/petebacondarwin/events{/privacy}",
        "received_events_url": "https://api.github.com/users/petebacondarwin/received_events",
        "type": "User",
        "site_admin": false
      },
      "committer": {
        "login": "kara",
        "id": 3871688,
        "node_id": "MDQ6VXNlcjM4NzE2ODg=",
        "avatar_url": "https://avatars3.githubusercontent.com/u/3871688?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/kara",
        "html_url": "https://github.com/kara",
        "followers_url": "https://api.github.com/users/kara/followers",
        "following_url": "https://api.github.com/users/kara/following{/other_user}",
        "gists_url": "https://api.github.com/users/kara/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/kara/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/kara/subscriptions",
        "organizations_url": "https://api.github.com/users/kara/orgs",
        "repos_url": "https://api.github.com/users/kara/repos",
        "events_url": "https://api.github.com/users/kara/events{/privacy}",
        "received_events_url": "https://api.github.com/users/kara/received_events",
        "type": "User",
        "site_admin": false
      },
      "parents": [
        {
          "sha": "47666f548c8a475a79d95ffb5f4264f4bb76233f",
          "url": "https://api.github.com/repos/angular/angular/commits/47666f548c8a475a79d95ffb5f4264f4bb76233f",
          "html_url": "https://github.com/angular/angular/commit/47666f548c8a475a79d95ffb5f4264f4bb76233f"
        }
      ]
    },
    {
      "sha": "47666f548c8a475a79d95ffb5f4264f4bb76233f",
      "node_id": "MDY6Q29tbWl0MjQxOTUzMzk6NDc2NjZmNTQ4YzhhNDc1YTc5ZDk1ZmZiNWY0MjY0ZjRiYjc2MjMzZg==",
      "commit": {
        "author": {
          "name": "Pete Bacon Darwin",
          "email": "pete@bacondarwin.com",
          "date": "2019-12-18T14:03:04Z"
        },
        "committer": {
          "name": "Kara Erickson",
          "email": "karakara@google.com",
          "date": "2019-12-18T19:25:01Z"
        },
        "message": "fix(ngcc): handle CommonJS re-exports by reference (#34254)\n\nIn TS we can re-export imports using statements of the form:\n\n```\nexport * from 'some-import';\n```\n\nThis can be downleveled in CommonJS to either:\n\n```\n__export(require('some-import'));\n```\n\nor\n\n```\nvar someImport = require('some-import');\n__export(someImport);\n```\n\nPreviously we only supported the first downleveled version.\nThis commit adds support for the second version.\n\nPR Close #34254",
        "tree": {
          "sha": "77f5353d3138a08e2aecfd4a0cf4f4fe756f62c9",
          "url": "https://api.github.com/repos/angular/angular/git/trees/77f5353d3138a08e2aecfd4a0cf4f4fe756f62c9"
        },
        "url": "https://api.github.com/repos/angular/angular/git/commits/47666f548c8a475a79d95ffb5f4264f4bb76233f",
        "comment_count": 0,
        "verification": {
          "verified": false,
          "reason": "unsigned",
          "signature": null,
          "payload": null
        }
      },
      "url": "https://api.github.com/repos/angular/angular/commits/47666f548c8a475a79d95ffb5f4264f4bb76233f",
      "html_url": "https://github.com/angular/angular/commit/47666f548c8a475a79d95ffb5f4264f4bb76233f",
      "comments_url": "https://api.github.com/repos/angular/angular/commits/47666f548c8a475a79d95ffb5f4264f4bb76233f/comments",
      "author": {
        "login": "petebacondarwin",
        "id": 15655,
        "node_id": "MDQ6VXNlcjE1NjU1",
        "avatar_url": "https://avatars0.githubusercontent.com/u/15655?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/petebacondarwin",
        "html_url": "https://github.com/petebacondarwin",
        "followers_url": "https://api.github.com/users/petebacondarwin/followers",
        "following_url": "https://api.github.com/users/petebacondarwin/following{/other_user}",
        "gists_url": "https://api.github.com/users/petebacondarwin/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/petebacondarwin/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/petebacondarwin/subscriptions",
        "organizations_url": "https://api.github.com/users/petebacondarwin/orgs",
        "repos_url": "https://api.github.com/users/petebacondarwin/repos",
        "events_url": "https://api.github.com/users/petebacondarwin/events{/privacy}",
        "received_events_url": "https://api.github.com/users/petebacondarwin/received_events",
        "type": "User",
        "site_admin": false
      },
      "committer": {
        "login": "kara",
        "id": 3871688,
        "node_id": "MDQ6VXNlcjM4NzE2ODg=",
        "avatar_url": "https://avatars3.githubusercontent.com/u/3871688?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/kara",
        "html_url": "https://github.com/kara",
        "followers_url": "https://api.github.com/users/kara/followers",
        "following_url": "https://api.github.com/users/kara/following{/other_user}",
        "gists_url": "https://api.github.com/users/kara/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/kara/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/kara/subscriptions",
        "organizations_url": "https://api.github.com/users/kara/orgs",
        "repos_url": "https://api.github.com/users/kara/repos",
        "events_url": "https://api.github.com/users/kara/events{/privacy}",
        "received_events_url": "https://api.github.com/users/kara/received_events",
        "type": "User",
        "site_admin": false
      },
      "parents": [
        {
          "sha": "0b837e2f0d4ac178b0ddd8f50c46c1dc97e9b12c",
          "url": "https://api.github.com/repos/angular/angular/commits/0b837e2f0d4ac178b0ddd8f50c46c1dc97e9b12c",
          "html_url": "https://github.com/angular/angular/commit/0b837e2f0d4ac178b0ddd8f50c46c1dc97e9b12c"
        }
      ]
    },
    {
      "sha": "0b837e2f0d4ac178b0ddd8f50c46c1dc97e9b12c",
      "node_id": "MDY6Q29tbWl0MjQxOTUzMzk6MGI4MzdlMmYwZDRhYzE3OGIwZGRkOGY1MGM0NmMxZGM5N2U5YjEyYw==",
      "commit": {
        "author": {
          "name": "Pete Bacon Darwin",
          "email": "pete@bacondarwin.com",
          "date": "2019-12-18T14:03:04Z"
        },
        "committer": {
          "name": "Kara Erickson",
          "email": "karakara@google.com",
          "date": "2019-12-18T19:25:01Z"
        },
        "message": "refactor(ngcc): use bundle src to create reflection hosts (#34254)\n\nPreviously individual properties of the src bundle program were\npassed to the reflection host constructors. But going forward,\nmore properties will be required. To prevent the signature getting\ncontinually larger and more unwieldy, this change just passes the\nwhole src bundle to the constructor, allowing it to extract what it\nneeds.\n\nPR Close #34254",
        "tree": {
          "sha": "024a72fb8c15282f2e9442bbb515d5be0a801ee8",
          "url": "https://api.github.com/repos/angular/angular/git/trees/024a72fb8c15282f2e9442bbb515d5be0a801ee8"
        },
        "url": "https://api.github.com/repos/angular/angular/git/commits/0b837e2f0d4ac178b0ddd8f50c46c1dc97e9b12c",
        "comment_count": 0,
        "verification": {
          "verified": false,
          "reason": "unsigned",
          "signature": null,
          "payload": null
        }
      },
      "url": "https://api.github.com/repos/angular/angular/commits/0b837e2f0d4ac178b0ddd8f50c46c1dc97e9b12c",
      "html_url": "https://github.com/angular/angular/commit/0b837e2f0d4ac178b0ddd8f50c46c1dc97e9b12c",
      "comments_url": "https://api.github.com/repos/angular/angular/commits/0b837e2f0d4ac178b0ddd8f50c46c1dc97e9b12c/comments",
      "author": {
        "login": "petebacondarwin",
        "id": 15655,
        "node_id": "MDQ6VXNlcjE1NjU1",
        "avatar_url": "https://avatars0.githubusercontent.com/u/15655?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/petebacondarwin",
        "html_url": "https://github.com/petebacondarwin",
        "followers_url": "https://api.github.com/users/petebacondarwin/followers",
        "following_url": "https://api.github.com/users/petebacondarwin/following{/other_user}",
        "gists_url": "https://api.github.com/users/petebacondarwin/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/petebacondarwin/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/petebacondarwin/subscriptions",
        "organizations_url": "https://api.github.com/users/petebacondarwin/orgs",
        "repos_url": "https://api.github.com/users/petebacondarwin/repos",
        "events_url": "https://api.github.com/users/petebacondarwin/events{/privacy}",
        "received_events_url": "https://api.github.com/users/petebacondarwin/received_events",
        "type": "User",
        "site_admin": false
      },
      "committer": {
        "login": "kara",
        "id": 3871688,
        "node_id": "MDQ6VXNlcjM4NzE2ODg=",
        "avatar_url": "https://avatars3.githubusercontent.com/u/3871688?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/kara",
        "html_url": "https://github.com/kara",
        "followers_url": "https://api.github.com/users/kara/followers",
        "following_url": "https://api.github.com/users/kara/following{/other_user}",
        "gists_url": "https://api.github.com/users/kara/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/kara/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/kara/subscriptions",
        "organizations_url": "https://api.github.com/users/kara/orgs",
        "repos_url": "https://api.github.com/users/kara/repos",
        "events_url": "https://api.github.com/users/kara/events{/privacy}",
        "received_events_url": "https://api.github.com/users/kara/received_events",
        "type": "User",
        "site_admin": false
      },
      "parents": [
        {
          "sha": "dfecca29dab86c62d4c3a45036d2358194d0320f",
          "url": "https://api.github.com/repos/angular/angular/commits/dfecca29dab86c62d4c3a45036d2358194d0320f",
          "html_url": "https://github.com/angular/angular/commit/dfecca29dab86c62d4c3a45036d2358194d0320f"
        }
      ]
    },
    {
      "sha": "dfecca29dab86c62d4c3a45036d2358194d0320f",
      "node_id": "MDY6Q29tbWl0MjQxOTUzMzk6ZGZlY2NhMjlkYWI4NmM2MmQ0YzNhNDUwMzZkMjM1ODE5NGQwMzIwZg==",
      "commit": {
        "author": {
          "name": "Martin Probst",
          "email": "martin@probst.io",
          "date": "2019-12-09T13:25:15Z"
        },
        "committer": {
          "name": "Kara Erickson",
          "email": "karakara@google.com",
          "date": "2019-12-18T18:14:10Z"
        },
        "message": "refactor: TypeScript 3.7 fixes. (#34372)\n\nThis PR fixes more TypeScript 3.7 compilation issues.\n\nPR Close #34372",
        "tree": {
          "sha": "ec21ce739bda338bce0cfa87892210fa217faae1",
          "url": "https://api.github.com/repos/angular/angular/git/trees/ec21ce739bda338bce0cfa87892210fa217faae1"
        },
        "url": "https://api.github.com/repos/angular/angular/git/commits/dfecca29dab86c62d4c3a45036d2358194d0320f",
        "comment_count": 0,
        "verification": {
          "verified": false,
          "reason": "unsigned",
          "signature": null,
          "payload": null
        }
      },
      "url": "https://api.github.com/repos/angular/angular/commits/dfecca29dab86c62d4c3a45036d2358194d0320f",
      "html_url": "https://github.com/angular/angular/commit/dfecca29dab86c62d4c3a45036d2358194d0320f",
      "comments_url": "https://api.github.com/repos/angular/angular/commits/dfecca29dab86c62d4c3a45036d2358194d0320f/comments",
      "author": {
        "login": "mprobst",
        "id": 7208,
        "node_id": "MDQ6VXNlcjcyMDg=",
        "avatar_url": "https://avatars0.githubusercontent.com/u/7208?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/mprobst",
        "html_url": "https://github.com/mprobst",
        "followers_url": "https://api.github.com/users/mprobst/followers",
        "following_url": "https://api.github.com/users/mprobst/following{/other_user}",
        "gists_url": "https://api.github.com/users/mprobst/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/mprobst/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/mprobst/subscriptions",
        "organizations_url": "https://api.github.com/users/mprobst/orgs",
        "repos_url": "https://api.github.com/users/mprobst/repos",
        "events_url": "https://api.github.com/users/mprobst/events{/privacy}",
        "received_events_url": "https://api.github.com/users/mprobst/received_events",
        "type": "User",
        "site_admin": false
      },
      "committer": {
        "login": "kara",
        "id": 3871688,
        "node_id": "MDQ6VXNlcjM4NzE2ODg=",
        "avatar_url": "https://avatars3.githubusercontent.com/u/3871688?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/kara",
        "html_url": "https://github.com/kara",
        "followers_url": "https://api.github.com/users/kara/followers",
        "following_url": "https://api.github.com/users/kara/following{/other_user}",
        "gists_url": "https://api.github.com/users/kara/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/kara/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/kara/subscriptions",
        "organizations_url": "https://api.github.com/users/kara/orgs",
        "repos_url": "https://api.github.com/users/kara/repos",
        "events_url": "https://api.github.com/users/kara/events{/privacy}",
        "received_events_url": "https://api.github.com/users/kara/received_events",
        "type": "User",
        "site_admin": false
      },
      "parents": [
        {
          "sha": "1eae7c81e979dfb8b503ea1d7c42025c1d4d7af7",
          "url": "https://api.github.com/repos/angular/angular/commits/1eae7c81e979dfb8b503ea1d7c42025c1d4d7af7",
          "html_url": "https://github.com/angular/angular/commit/1eae7c81e979dfb8b503ea1d7c42025c1d4d7af7"
        }
      ]
    },
    {
      "sha": "1eae7c81e979dfb8b503ea1d7c42025c1d4d7af7",
      "node_id": "MDY6Q29tbWl0MjQxOTUzMzk6MWVhZTdjODFlOTc5ZGZiOGI1MDNlYTFkN2M0MjAyNWMxZDRkN2FmNw==",
      "commit": {
        "author": {
          "name": "Keen Yee Liau",
          "email": "kyliau@google.com",
          "date": "2019-12-18T00:57:17Z"
        },
        "committer": {
          "name": "Kara Erickson",
          "email": "karakara@google.com",
          "date": "2019-12-18T17:14:16Z"
        },
        "message": "refactor(language-service): Append missing AttrAst to AstPath (#34459)\n\nWhen a HTML Ast containing an Attribute node is converted to a Template Ast,\nthe attribute node might get dropped from the Template Ast path.\nThis is because the AttrNode is not even in the Template Ast to begin with.\nIn this case, we manually fix the path by converting the Attribute node\nto a AttrAst node and appending it to the path.\n\nThis allows the `ExpressionVisitor` to properly visit the leaf node in the\nTemplateAst path. We no longer need to visit the `Element` and look for\nattributes.\n\nPR Close #34459",
        "tree": {
          "sha": "00b4a1b480a795a464254cb3f3f61004a6f93ad0",
          "url": "https://api.github.com/repos/angular/angular/git/trees/00b4a1b480a795a464254cb3f3f61004a6f93ad0"
        },
        "url": "https://api.github.com/repos/angular/angular/git/commits/1eae7c81e979dfb8b503ea1d7c42025c1d4d7af7",
        "comment_count": 0,
        "verification": {
          "verified": false,
          "reason": "unsigned",
          "signature": null,
          "payload": null
        }
      },
      "url": "https://api.github.com/repos/angular/angular/commits/1eae7c81e979dfb8b503ea1d7c42025c1d4d7af7",
      "html_url": "https://github.com/angular/angular/commit/1eae7c81e979dfb8b503ea1d7c42025c1d4d7af7",
      "comments_url": "https://api.github.com/repos/angular/angular/commits/1eae7c81e979dfb8b503ea1d7c42025c1d4d7af7/comments",
      "author": {
        "login": "kyliau",
        "id": 2941178,
        "node_id": "MDQ6VXNlcjI5NDExNzg=",
        "avatar_url": "https://avatars3.githubusercontent.com/u/2941178?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/kyliau",
        "html_url": "https://github.com/kyliau",
        "followers_url": "https://api.github.com/users/kyliau/followers",
        "following_url": "https://api.github.com/users/kyliau/following{/other_user}",
        "gists_url": "https://api.github.com/users/kyliau/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/kyliau/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/kyliau/subscriptions",
        "organizations_url": "https://api.github.com/users/kyliau/orgs",
        "repos_url": "https://api.github.com/users/kyliau/repos",
        "events_url": "https://api.github.com/users/kyliau/events{/privacy}",
        "received_events_url": "https://api.github.com/users/kyliau/received_events",
        "type": "User",
        "site_admin": false
      },
      "committer": {
        "login": "kara",
        "id": 3871688,
        "node_id": "MDQ6VXNlcjM4NzE2ODg=",
        "avatar_url": "https://avatars3.githubusercontent.com/u/3871688?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/kara",
        "html_url": "https://github.com/kara",
        "followers_url": "https://api.github.com/users/kara/followers",
        "following_url": "https://api.github.com/users/kara/following{/other_user}",
        "gists_url": "https://api.github.com/users/kara/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/kara/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/kara/subscriptions",
        "organizations_url": "https://api.github.com/users/kara/orgs",
        "repos_url": "https://api.github.com/users/kara/repos",
        "events_url": "https://api.github.com/users/kara/events{/privacy}",
        "received_events_url": "https://api.github.com/users/kara/received_events",
        "type": "User",
        "site_admin": false
      },
      "parents": [
        {
          "sha": "a04f7c0d5ff5a820b40bc448c8fea558cf9b0b74",
          "url": "https://api.github.com/repos/angular/angular/commits/a04f7c0d5ff5a820b40bc448c8fea558cf9b0b74",
          "html_url": "https://github.com/angular/angular/commit/a04f7c0d5ff5a820b40bc448c8fea558cf9b0b74"
        }
      ]
    },
    {
      "sha": "a04f7c0d5ff5a820b40bc448c8fea558cf9b0b74",
      "node_id": "MDY6Q29tbWl0MjQxOTUzMzk6YTA0ZjdjMGQ1ZmY1YTgyMGI0MGJjNDQ4YzhmZWE1NThjZjliMGI3NA==",
      "commit": {
        "author": {
          "name": "Keen Yee Liau",
          "email": "kyliau@umich.edu",
          "date": "2019-12-12T23:46:27Z"
        },
        "committer": {
          "name": "Kara Erickson",
          "email": "karakara@google.com",
          "date": "2019-12-18T17:13:31Z"
        },
        "message": "fix(language-service): Proper completions for properties and events (#34445)\n\nThis commit fixes autocompletions for properties and events bindings.\n\nThe language service will no longer provide bindings like (click) or [id].\nInstead, it'll infer the context based on the brackets and provide suggestions\nwithout any brackets.\n\nThis fix also adds support for alternative binding syntax such as\n`bind-`, `on-`, and `bindon`.\n\nPR closes https://github.com/angular/vscode-ng-language-service/issues/398\nPR closes https://github.com/angular/vscode-ng-language-service/issues/474\n\nPR Close #34445",
        "tree": {
          "sha": "6184351145c7870847f94782e3a4bdb85af63f1c",
          "url": "https://api.github.com/repos/angular/angular/git/trees/6184351145c7870847f94782e3a4bdb85af63f1c"
        },
        "url": "https://api.github.com/repos/angular/angular/git/commits/a04f7c0d5ff5a820b40bc448c8fea558cf9b0b74",
        "comment_count": 0,
        "verification": {
          "verified": false,
          "reason": "unsigned",
          "signature": null,
          "payload": null
        }
      },
      "url": "https://api.github.com/repos/angular/angular/commits/a04f7c0d5ff5a820b40bc448c8fea558cf9b0b74",
      "html_url": "https://github.com/angular/angular/commit/a04f7c0d5ff5a820b40bc448c8fea558cf9b0b74",
      "comments_url": "https://api.github.com/repos/angular/angular/commits/a04f7c0d5ff5a820b40bc448c8fea558cf9b0b74/comments",
      "author": {
        "login": "kyliau",
        "id": 2941178,
        "node_id": "MDQ6VXNlcjI5NDExNzg=",
        "avatar_url": "https://avatars3.githubusercontent.com/u/2941178?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/kyliau",
        "html_url": "https://github.com/kyliau",
        "followers_url": "https://api.github.com/users/kyliau/followers",
        "following_url": "https://api.github.com/users/kyliau/following{/other_user}",
        "gists_url": "https://api.github.com/users/kyliau/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/kyliau/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/kyliau/subscriptions",
        "organizations_url": "https://api.github.com/users/kyliau/orgs",
        "repos_url": "https://api.github.com/users/kyliau/repos",
        "events_url": "https://api.github.com/users/kyliau/events{/privacy}",
        "received_events_url": "https://api.github.com/users/kyliau/received_events",
        "type": "User",
        "site_admin": false
      },
      "committer": {
        "login": "kara",
        "id": 3871688,
        "node_id": "MDQ6VXNlcjM4NzE2ODg=",
        "avatar_url": "https://avatars3.githubusercontent.com/u/3871688?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/kara",
        "html_url": "https://github.com/kara",
        "followers_url": "https://api.github.com/users/kara/followers",
        "following_url": "https://api.github.com/users/kara/following{/other_user}",
        "gists_url": "https://api.github.com/users/kara/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/kara/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/kara/subscriptions",
        "organizations_url": "https://api.github.com/users/kara/orgs",
        "repos_url": "https://api.github.com/users/kara/repos",
        "events_url": "https://api.github.com/users/kara/events{/privacy}",
        "received_events_url": "https://api.github.com/users/kara/received_events",
        "type": "User",
        "site_admin": false
      },
      "parents": [
        {
          "sha": "9d1175e2b2b8bc8b282b15f56daac01e0537a5bf",
          "url": "https://api.github.com/repos/angular/angular/commits/9d1175e2b2b8bc8b282b15f56daac01e0537a5bf",
          "html_url": "https://github.com/angular/angular/commit/9d1175e2b2b8bc8b282b15f56daac01e0537a5bf"
        }
      ]
    },
    {
      "sha": "9d1175e2b2b8bc8b282b15f56daac01e0537a5bf",
      "node_id": "MDY6Q29tbWl0MjQxOTUzMzk6OWQxMTc1ZTJiMmI4YmM4YjI4MmIxNWY1NmRhYWMwMWUwNTM3YTViZg==",
      "commit": {
        "author": {
          "name": "Andrew Kushnir",
          "email": "akushnir@google.com",
          "date": "2019-12-11T00:23:56Z"
        },
        "committer": {
          "name": "Kara Erickson",
          "email": "karakara@google.com",
          "date": "2019-12-18T17:12:57Z"
        },
        "message": "fix(ivy): improve ExpressionChangedAfterChecked error (#34381)\n\nPrior to this change, the ExpressionChangedAfterChecked error thrown in Ivy was missing useful information that was available in View Engine, specifically: missing property name for proprty bindings and also the content of the entire property interpolation (only a changed value was displayed) if one of expressions was changed unexpectedly. This commit improves the error message by including the mentioned information into the error text.\n\nPR Close #34381",
        "tree": {
          "sha": "3594fe69192db1cc3cd54dabe3406f17838f3af2",
          "url": "https://api.github.com/repos/angular/angular/git/trees/3594fe69192db1cc3cd54dabe3406f17838f3af2"
        },
        "url": "https://api.github.com/repos/angular/angular/git/commits/9d1175e2b2b8bc8b282b15f56daac01e0537a5bf",
        "comment_count": 0,
        "verification": {
          "verified": false,
          "reason": "unsigned",
          "signature": null,
          "payload": null
        }
      },
      "url": "https://api.github.com/repos/angular/angular/commits/9d1175e2b2b8bc8b282b15f56daac01e0537a5bf",
      "html_url": "https://github.com/angular/angular/commit/9d1175e2b2b8bc8b282b15f56daac01e0537a5bf",
      "comments_url": "https://api.github.com/repos/angular/angular/commits/9d1175e2b2b8bc8b282b15f56daac01e0537a5bf/comments",
      "author": {
        "login": "AndrewKushnir",
        "id": 43554145,
        "node_id": "MDQ6VXNlcjQzNTU0MTQ1",
        "avatar_url": "https://avatars1.githubusercontent.com/u/43554145?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/AndrewKushnir",
        "html_url": "https://github.com/AndrewKushnir",
        "followers_url": "https://api.github.com/users/AndrewKushnir/followers",
        "following_url": "https://api.github.com/users/AndrewKushnir/following{/other_user}",
        "gists_url": "https://api.github.com/users/AndrewKushnir/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/AndrewKushnir/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/AndrewKushnir/subscriptions",
        "organizations_url": "https://api.github.com/users/AndrewKushnir/orgs",
        "repos_url": "https://api.github.com/users/AndrewKushnir/repos",
        "events_url": "https://api.github.com/users/AndrewKushnir/events{/privacy}",
        "received_events_url": "https://api.github.com/users/AndrewKushnir/received_events",
        "type": "User",
        "site_admin": false
      },
      "committer": {
        "login": "kara",
        "id": 3871688,
        "node_id": "MDQ6VXNlcjM4NzE2ODg=",
        "avatar_url": "https://avatars3.githubusercontent.com/u/3871688?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/kara",
        "html_url": "https://github.com/kara",
        "followers_url": "https://api.github.com/users/kara/followers",
        "following_url": "https://api.github.com/users/kara/following{/other_user}",
        "gists_url": "https://api.github.com/users/kara/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/kara/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/kara/subscriptions",
        "organizations_url": "https://api.github.com/users/kara/orgs",
        "repos_url": "https://api.github.com/users/kara/repos",
        "events_url": "https://api.github.com/users/kara/events{/privacy}",
        "received_events_url": "https://api.github.com/users/kara/received_events",
        "type": "User",
        "site_admin": false
      },
      "parents": [
        {
          "sha": "3e201181bb9bc8da15b2a808a34c742458149851",
          "url": "https://api.github.com/repos/angular/angular/commits/3e201181bb9bc8da15b2a808a34c742458149851",
          "html_url": "https://github.com/angular/angular/commit/3e201181bb9bc8da15b2a808a34c742458149851"
        }
      ]
    },
    {
      "sha": "3e201181bb9bc8da15b2a808a34c742458149851",
      "node_id": "MDY6Q29tbWl0MjQxOTUzMzk6M2UyMDExODFiYjliYzhkYTE1YjJhODA4YTM0Yzc0MjQ1ODE0OTg1MQ==",
      "commit": {
        "author": {
          "name": "Ayaz Hafiz",
          "email": "ayaz.hafiz.1@gmail.com",
          "date": "2019-07-31T21:47:25Z"
        },
        "committer": {
          "name": "Kara Erickson",
          "email": "karakara@google.com",
          "date": "2019-12-17T22:39:33Z"
        },
        "message": "fix(ivy): correctly associate output bound events with directives (#31938)\n\nPreviously, bound events were incorrectly bound to directives with\ninputs matching the bound event attribute. This fixes that so bound\nevents can only be bound to directives with matching outputs.\n\nAdds tests for all kinds of directive matching on bound attributes.\n\nPR Close #31938",
        "tree": {
          "sha": "72181dd01ff7ddec7479351277dd1dfe0c58bc15",
          "url": "https://api.github.com/repos/angular/angular/git/trees/72181dd01ff7ddec7479351277dd1dfe0c58bc15"
        },
        "url": "https://api.github.com/repos/angular/angular/git/commits/3e201181bb9bc8da15b2a808a34c742458149851",
        "comment_count": 0,
        "verification": {
          "verified": false,
          "reason": "unsigned",
          "signature": null,
          "payload": null
        }
      },
      "url": "https://api.github.com/repos/angular/angular/commits/3e201181bb9bc8da15b2a808a34c742458149851",
      "html_url": "https://github.com/angular/angular/commit/3e201181bb9bc8da15b2a808a34c742458149851",
      "comments_url": "https://api.github.com/repos/angular/angular/commits/3e201181bb9bc8da15b2a808a34c742458149851/comments",
      "author": {
        "login": "ayazhafiz",
        "id": 20735482,
        "node_id": "MDQ6VXNlcjIwNzM1NDgy",
        "avatar_url": "https://avatars1.githubusercontent.com/u/20735482?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/ayazhafiz",
        "html_url": "https://github.com/ayazhafiz",
        "followers_url": "https://api.github.com/users/ayazhafiz/followers",
        "following_url": "https://api.github.com/users/ayazhafiz/following{/other_user}",
        "gists_url": "https://api.github.com/users/ayazhafiz/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/ayazhafiz/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/ayazhafiz/subscriptions",
        "organizations_url": "https://api.github.com/users/ayazhafiz/orgs",
        "repos_url": "https://api.github.com/users/ayazhafiz/repos",
        "events_url": "https://api.github.com/users/ayazhafiz/events{/privacy}",
        "received_events_url": "https://api.github.com/users/ayazhafiz/received_events",
        "type": "User",
        "site_admin": false
      },
      "committer": {
        "login": "kara",
        "id": 3871688,
        "node_id": "MDQ6VXNlcjM4NzE2ODg=",
        "avatar_url": "https://avatars3.githubusercontent.com/u/3871688?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/kara",
        "html_url": "https://github.com/kara",
        "followers_url": "https://api.github.com/users/kara/followers",
        "following_url": "https://api.github.com/users/kara/following{/other_user}",
        "gists_url": "https://api.github.com/users/kara/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/kara/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/kara/subscriptions",
        "organizations_url": "https://api.github.com/users/kara/orgs",
        "repos_url": "https://api.github.com/users/kara/repos",
        "events_url": "https://api.github.com/users/kara/events{/privacy}",
        "received_events_url": "https://api.github.com/users/kara/received_events",
        "type": "User",
        "site_admin": false
      },
      "parents": [
        {
          "sha": "7938ff34b171e4bbf362f39d9e6e2c8e1abf6486",
          "url": "https://api.github.com/repos/angular/angular/commits/7938ff34b171e4bbf362f39d9e6e2c8e1abf6486",
          "html_url": "https://github.com/angular/angular/commit/7938ff34b171e4bbf362f39d9e6e2c8e1abf6486"
        }
      ]
    },
    {
      "sha": "7938ff34b171e4bbf362f39d9e6e2c8e1abf6486",
      "node_id": "MDY6Q29tbWl0MjQxOTUzMzk6NzkzOGZmMzRiMTcxZTRiYmYzNjJmMzlkOWU2ZTJjOGUxYWJmNjQ4Ng==",
      "commit": {
        "author": {
          "name": "George Kalpakas",
          "email": "kalpakas.g@gmail.com",
          "date": "2019-12-05T19:02:57Z"
        },
        "committer": {
          "name": "Kara Erickson",
          "email": "karakara@google.com",
          "date": "2019-12-17T22:38:16Z"
        },
        "message": "refactor(compiler-cli): avoid unnecessarily calling `getSourceFile()` twice in `PartialEvaluator` (#34441)\n\nThis is not expected to have any noticeable perf impact, but it wasteful\nnonetheless (and annoying when stepping through the code while debugging\n`ngtsc`/`ngcc`).\n\nPR Close #34441",
        "tree": {
          "sha": "fd600c2397b603a1e732ce8cf9c7a21a0ad1d19f",
          "url": "https://api.github.com/repos/angular/angular/git/trees/fd600c2397b603a1e732ce8cf9c7a21a0ad1d19f"
        },
        "url": "https://api.github.com/repos/angular/angular/git/commits/7938ff34b171e4bbf362f39d9e6e2c8e1abf6486",
        "comment_count": 0,
        "verification": {
          "verified": false,
          "reason": "unsigned",
          "signature": null,
          "payload": null
        }
      },
      "url": "https://api.github.com/repos/angular/angular/commits/7938ff34b171e4bbf362f39d9e6e2c8e1abf6486",
      "html_url": "https://github.com/angular/angular/commit/7938ff34b171e4bbf362f39d9e6e2c8e1abf6486",
      "comments_url": "https://api.github.com/repos/angular/angular/commits/7938ff34b171e4bbf362f39d9e6e2c8e1abf6486/comments",
      "author": {
        "login": "gkalpak",
        "id": 8604205,
        "node_id": "MDQ6VXNlcjg2MDQyMDU=",
        "avatar_url": "https://avatars2.githubusercontent.com/u/8604205?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/gkalpak",
        "html_url": "https://github.com/gkalpak",
        "followers_url": "https://api.github.com/users/gkalpak/followers",
        "following_url": "https://api.github.com/users/gkalpak/following{/other_user}",
        "gists_url": "https://api.github.com/users/gkalpak/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/gkalpak/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/gkalpak/subscriptions",
        "organizations_url": "https://api.github.com/users/gkalpak/orgs",
        "repos_url": "https://api.github.com/users/gkalpak/repos",
        "events_url": "https://api.github.com/users/gkalpak/events{/privacy}",
        "received_events_url": "https://api.github.com/users/gkalpak/received_events",
        "type": "User",
        "site_admin": false
      },
      "committer": {
        "login": "kara",
        "id": 3871688,
        "node_id": "MDQ6VXNlcjM4NzE2ODg=",
        "avatar_url": "https://avatars3.githubusercontent.com/u/3871688?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/kara",
        "html_url": "https://github.com/kara",
        "followers_url": "https://api.github.com/users/kara/followers",
        "following_url": "https://api.github.com/users/kara/following{/other_user}",
        "gists_url": "https://api.github.com/users/kara/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/kara/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/kara/subscriptions",
        "organizations_url": "https://api.github.com/users/kara/orgs",
        "repos_url": "https://api.github.com/users/kara/repos",
        "events_url": "https://api.github.com/users/kara/events{/privacy}",
        "received_events_url": "https://api.github.com/users/kara/received_events",
        "type": "User",
        "site_admin": false
      },
      "parents": [
        {
          "sha": "b637b9322e9ff9a747a914c4f949f04af7d8bc0f",
          "url": "https://api.github.com/repos/angular/angular/commits/b637b9322e9ff9a747a914c4f949f04af7d8bc0f",
          "html_url": "https://github.com/angular/angular/commit/b637b9322e9ff9a747a914c4f949f04af7d8bc0f"
        }
      ]
    },
    {
      "sha": "b637b9322e9ff9a747a914c4f949f04af7d8bc0f",
      "node_id": "MDY6Q29tbWl0MjQxOTUzMzk6YjYzN2I5MzIyZTlmZjlhNzQ3YTkxNGM0Zjk0OWYwNGFmN2Q4YmMwZg==",
      "commit": {
        "author": {
          "name": "George Kalpakas",
          "email": "kalpakas.g@gmail.com",
          "date": "2019-12-17T17:05:22Z"
        },
        "committer": {
          "name": "Kara Erickson",
          "email": "karakara@google.com",
          "date": "2019-12-17T21:32:00Z"
        },
        "message": "ci(docs-infra): fix failure in `aio_monitoring_stable` due to yarn version mismatch (#34451)\n\nThe `aio_monitoring_stable` CI job is triggered as a cronjob on the\nmaster branch and its purpose is to run some e2e tests against the\ndeployed stable version of the docs web-app at https://angular.io/. In\norder for the tests to be compatible with the deployed version of the\nweb-app (which gets deployed from the stable branch), the stable branch\nis checked out in git as part of the CI job.\n\nPreviously, we only checked out the `aio/` directory from the stable\nbranch, leaving the rest of the code at master. This doesn't matter as\nlong as the commands used to run the tests do not rely on code outside\nof `aio/`. However, it turns out that there _is_ code outside of `aio/`\nthat affects the executed commands: It is our vendored version of yarn\n(in `third_party/github.com/yarnpkg/`), which overwrites the global yarn\ninstalled on the docker image on CI and must match the version range\nspecified in `aio/package.json > engines`.\n\nUsing the yarn version checked out from the master branch with the\n`aio/` code checked out from the stable branch can lead to failures\nsuch as [this one][1].\n\nThis commit fixes the problem by checking out both the `aio/` and\n`third_party/github.com/yarnpkg/` directories from the stable branch and\nre-running the steps to overwrite the global yarn executable with our\nown version from `third_party/github.com/yarnpkg/`. This ensures that\nthe version of yarn used will be compatible with the version range\nspecified in `aio/package.json > engines`.\n\nNOTE:\nWe cannot checkout everything from the stable branch, since the CI\nconfig (`.circleci/config.yml` from the master branch) may try to run\ncertain scripts (such as `.circleci/get-vendored-yarn-path.js`) that are\nnot available on the stable branch. Therefore, we should only check out\nthe necessary bits from the stable branch.\n\n[1]: https://circleci.com/gh/angular/angular/567315\n\nPR Close #34451",
        "tree": {
          "sha": "ac1ee14a9bd33bfd94dedfbbda7aa3fab5e32dc4",
          "url": "https://api.github.com/repos/angular/angular/git/trees/ac1ee14a9bd33bfd94dedfbbda7aa3fab5e32dc4"
        },
        "url": "https://api.github.com/repos/angular/angular/git/commits/b637b9322e9ff9a747a914c4f949f04af7d8bc0f",
        "comment_count": 0,
        "verification": {
          "verified": false,
          "reason": "unsigned",
          "signature": null,
          "payload": null
        }
      },
      "url": "https://api.github.com/repos/angular/angular/commits/b637b9322e9ff9a747a914c4f949f04af7d8bc0f",
      "html_url": "https://github.com/angular/angular/commit/b637b9322e9ff9a747a914c4f949f04af7d8bc0f",
      "comments_url": "https://api.github.com/repos/angular/angular/commits/b637b9322e9ff9a747a914c4f949f04af7d8bc0f/comments",
      "author": {
        "login": "gkalpak",
        "id": 8604205,
        "node_id": "MDQ6VXNlcjg2MDQyMDU=",
        "avatar_url": "https://avatars2.githubusercontent.com/u/8604205?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/gkalpak",
        "html_url": "https://github.com/gkalpak",
        "followers_url": "https://api.github.com/users/gkalpak/followers",
        "following_url": "https://api.github.com/users/gkalpak/following{/other_user}",
        "gists_url": "https://api.github.com/users/gkalpak/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/gkalpak/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/gkalpak/subscriptions",
        "organizations_url": "https://api.github.com/users/gkalpak/orgs",
        "repos_url": "https://api.github.com/users/gkalpak/repos",
        "events_url": "https://api.github.com/users/gkalpak/events{/privacy}",
        "received_events_url": "https://api.github.com/users/gkalpak/received_events",
        "type": "User",
        "site_admin": false
      },
      "committer": {
        "login": "kara",
        "id": 3871688,
        "node_id": "MDQ6VXNlcjM4NzE2ODg=",
        "avatar_url": "https://avatars3.githubusercontent.com/u/3871688?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/kara",
        "html_url": "https://github.com/kara",
        "followers_url": "https://api.github.com/users/kara/followers",
        "following_url": "https://api.github.com/users/kara/following{/other_user}",
        "gists_url": "https://api.github.com/users/kara/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/kara/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/kara/subscriptions",
        "organizations_url": "https://api.github.com/users/kara/orgs",
        "repos_url": "https://api.github.com/users/kara/repos",
        "events_url": "https://api.github.com/users/kara/events{/privacy}",
        "received_events_url": "https://api.github.com/users/kara/received_events",
        "type": "User",
        "site_admin": false
      },
      "parents": [
        {
          "sha": "6bfe214346b5b7c0e7ede3848c2975a707fbf9ab",
          "url": "https://api.github.com/repos/angular/angular/commits/6bfe214346b5b7c0e7ede3848c2975a707fbf9ab",
          "html_url": "https://github.com/angular/angular/commit/6bfe214346b5b7c0e7ede3848c2975a707fbf9ab"
        }
      ]
    },
    {
      "sha": "6bfe214346b5b7c0e7ede3848c2975a707fbf9ab",
      "node_id": "MDY6Q29tbWl0MjQxOTUzMzk6NmJmZTIxNDM0NmI1YjdjMGU3ZWRlMzg0OGMyOTc1YTcwN2ZiZjlhYg==",
      "commit": {
        "author": {
          "name": "ajitsinghkaler",
          "email": "ajitsinghkaler0@gmail.com",
          "date": "2019-12-12T22:09:20Z"
        },
        "committer": {
          "name": "Kara Erickson",
          "email": "karakara@google.com",
          "date": "2019-12-17T19:41:55Z"
        },
        "message": "docs: add products.ts file on getting started page (#34301)\n\nin the getting started page (first tutorial) file products.ts which was not shown and was only present in the StackBlitz examples. So added a refrence that it is present in the example and also added a note that examples may carry filenames not present please look at StackBliz examples for details\n\nFixes #34291\n\nPR Close #34301",
        "tree": {
          "sha": "354d9e4bd4013a80067b736ed5d0d9ed683bfceb",
          "url": "https://api.github.com/repos/angular/angular/git/trees/354d9e4bd4013a80067b736ed5d0d9ed683bfceb"
        },
        "url": "https://api.github.com/repos/angular/angular/git/commits/6bfe214346b5b7c0e7ede3848c2975a707fbf9ab",
        "comment_count": 0,
        "verification": {
          "verified": false,
          "reason": "unsigned",
          "signature": null,
          "payload": null
        }
      },
      "url": "https://api.github.com/repos/angular/angular/commits/6bfe214346b5b7c0e7ede3848c2975a707fbf9ab",
      "html_url": "https://github.com/angular/angular/commit/6bfe214346b5b7c0e7ede3848c2975a707fbf9ab",
      "comments_url": "https://api.github.com/repos/angular/angular/commits/6bfe214346b5b7c0e7ede3848c2975a707fbf9ab/comments",
      "author": {
        "login": "ajitsinghkaler",
        "id": 39260684,
        "node_id": "MDQ6VXNlcjM5MjYwNjg0",
        "avatar_url": "https://avatars1.githubusercontent.com/u/39260684?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/ajitsinghkaler",
        "html_url": "https://github.com/ajitsinghkaler",
        "followers_url": "https://api.github.com/users/ajitsinghkaler/followers",
        "following_url": "https://api.github.com/users/ajitsinghkaler/following{/other_user}",
        "gists_url": "https://api.github.com/users/ajitsinghkaler/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/ajitsinghkaler/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/ajitsinghkaler/subscriptions",
        "organizations_url": "https://api.github.com/users/ajitsinghkaler/orgs",
        "repos_url": "https://api.github.com/users/ajitsinghkaler/repos",
        "events_url": "https://api.github.com/users/ajitsinghkaler/events{/privacy}",
        "received_events_url": "https://api.github.com/users/ajitsinghkaler/received_events",
        "type": "User",
        "site_admin": false
      },
      "committer": {
        "login": "kara",
        "id": 3871688,
        "node_id": "MDQ6VXNlcjM4NzE2ODg=",
        "avatar_url": "https://avatars3.githubusercontent.com/u/3871688?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/kara",
        "html_url": "https://github.com/kara",
        "followers_url": "https://api.github.com/users/kara/followers",
        "following_url": "https://api.github.com/users/kara/following{/other_user}",
        "gists_url": "https://api.github.com/users/kara/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/kara/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/kara/subscriptions",
        "organizations_url": "https://api.github.com/users/kara/orgs",
        "repos_url": "https://api.github.com/users/kara/repos",
        "events_url": "https://api.github.com/users/kara/events{/privacy}",
        "received_events_url": "https://api.github.com/users/kara/received_events",
        "type": "User",
        "site_admin": false
      },
      "parents": [
        {
          "sha": "9ba8059e88d0494a4a4dcb00a848d6f776184329",
          "url": "https://api.github.com/repos/angular/angular/commits/9ba8059e88d0494a4a4dcb00a848d6f776184329",
          "html_url": "https://github.com/angular/angular/commit/9ba8059e88d0494a4a4dcb00a848d6f776184329"
        }
      ]
    },
    {
      "sha": "9ba8059e88d0494a4a4dcb00a848d6f776184329",
      "node_id": "MDY6Q29tbWl0MjQxOTUzMzk6OWJhODA1OWU4OGQwNDk0YTRhNGRjYjAwYTg0OGQ2Zjc3NjE4NDMyOQ==",
      "commit": {
        "author": {
          "name": "Paul Gschwendtner",
          "email": "paulgschwendtner@gmail.com",
          "date": "2019-12-16T19:14:35Z"
        },
        "committer": {
          "name": "Kara Erickson",
          "email": "karakara@google.com",
          "date": "2019-12-17T19:41:17Z"
        },
        "message": "ci: update material-unit-tests job to include commit that reduced test flakiness (#34430)\n\nUpdates the material-unit-tests job commit SHA to the most recent\ncommit at the time of writing. The goal is to run the unit tests\nwith https://github.com/angular/components/commit/6ae74a0eb21268d4b107a052a8cf8ae63078bf99\nthat improved stability of a few menu tests that were flaky.\n\ne.g. https://circleci.com/gh/angular/angular/564650\n\nPR Close #34430",
        "tree": {
          "sha": "75145316e4017e18214b0ffb3e11b9518baf7e58",
          "url": "https://api.github.com/repos/angular/angular/git/trees/75145316e4017e18214b0ffb3e11b9518baf7e58"
        },
        "url": "https://api.github.com/repos/angular/angular/git/commits/9ba8059e88d0494a4a4dcb00a848d6f776184329",
        "comment_count": 0,
        "verification": {
          "verified": false,
          "reason": "unsigned",
          "signature": null,
          "payload": null
        }
      },
      "url": "https://api.github.com/repos/angular/angular/commits/9ba8059e88d0494a4a4dcb00a848d6f776184329",
      "html_url": "https://github.com/angular/angular/commit/9ba8059e88d0494a4a4dcb00a848d6f776184329",
      "comments_url": "https://api.github.com/repos/angular/angular/commits/9ba8059e88d0494a4a4dcb00a848d6f776184329/comments",
      "author": {
        "login": "devversion",
        "id": 4987015,
        "node_id": "MDQ6VXNlcjQ5ODcwMTU=",
        "avatar_url": "https://avatars3.githubusercontent.com/u/4987015?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/devversion",
        "html_url": "https://github.com/devversion",
        "followers_url": "https://api.github.com/users/devversion/followers",
        "following_url": "https://api.github.com/users/devversion/following{/other_user}",
        "gists_url": "https://api.github.com/users/devversion/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/devversion/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/devversion/subscriptions",
        "organizations_url": "https://api.github.com/users/devversion/orgs",
        "repos_url": "https://api.github.com/users/devversion/repos",
        "events_url": "https://api.github.com/users/devversion/events{/privacy}",
        "received_events_url": "https://api.github.com/users/devversion/received_events",
        "type": "User",
        "site_admin": false
      },
      "committer": {
        "login": "kara",
        "id": 3871688,
        "node_id": "MDQ6VXNlcjM4NzE2ODg=",
        "avatar_url": "https://avatars3.githubusercontent.com/u/3871688?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/kara",
        "html_url": "https://github.com/kara",
        "followers_url": "https://api.github.com/users/kara/followers",
        "following_url": "https://api.github.com/users/kara/following{/other_user}",
        "gists_url": "https://api.github.com/users/kara/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/kara/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/kara/subscriptions",
        "organizations_url": "https://api.github.com/users/kara/orgs",
        "repos_url": "https://api.github.com/users/kara/repos",
        "events_url": "https://api.github.com/users/kara/events{/privacy}",
        "received_events_url": "https://api.github.com/users/kara/received_events",
        "type": "User",
        "site_admin": false
      },
      "parents": [
        {
          "sha": "763f8d470acf0bd75d692dad2b095455ab603e5d",
          "url": "https://api.github.com/repos/angular/angular/commits/763f8d470acf0bd75d692dad2b095455ab603e5d",
          "html_url": "https://github.com/angular/angular/commit/763f8d470acf0bd75d692dad2b095455ab603e5d"
        }
      ]
    },
    {
      "sha": "763f8d470acf0bd75d692dad2b095455ab603e5d",
      "node_id": "MDY6Q29tbWl0MjQxOTUzMzk6NzYzZjhkNDcwYWNmMGJkNzVkNjkyZGFkMmIwOTU0NTVhYjYwM2U1ZA==",
      "commit": {
        "author": {
          "name": "Alex Rickabaugh",
          "email": "alx+alxhub@alxandria.net",
          "date": "2019-12-13T22:29:05Z"
        },
        "committer": {
          "name": "Kara Erickson",
          "email": "karakara@google.com",
          "date": "2019-12-17T19:39:48Z"
        },
        "message": "fix(ivy): validate the NgModule declarations field (#34404)\n\nThis commit adds three previously missing validations to\nNgModule.declarations:\n\n1. It checks that declared classes are actually within the current\n   compilation.\n\n2. It checks that declared classes are directives, components, or pipes.\n\n3. It checks that classes are declared in at most one NgModule.\n\nPR Close #34404",
        "tree": {
          "sha": "68f0b77c03262429f3209832b4f342fe452f7c60",
          "url": "https://api.github.com/repos/angular/angular/git/trees/68f0b77c03262429f3209832b4f342fe452f7c60"
        },
        "url": "https://api.github.com/repos/angular/angular/git/commits/763f8d470acf0bd75d692dad2b095455ab603e5d",
        "comment_count": 0,
        "verification": {
          "verified": false,
          "reason": "unsigned",
          "signature": null,
          "payload": null
        }
      },
      "url": "https://api.github.com/repos/angular/angular/commits/763f8d470acf0bd75d692dad2b095455ab603e5d",
      "html_url": "https://github.com/angular/angular/commit/763f8d470acf0bd75d692dad2b095455ab603e5d",
      "comments_url": "https://api.github.com/repos/angular/angular/commits/763f8d470acf0bd75d692dad2b095455ab603e5d/comments",
      "author": {
        "login": "alxhub",
        "id": 4175141,
        "node_id": "MDQ6VXNlcjQxNzUxNDE=",
        "avatar_url": "https://avatars0.githubusercontent.com/u/4175141?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/alxhub",
        "html_url": "https://github.com/alxhub",
        "followers_url": "https://api.github.com/users/alxhub/followers",
        "following_url": "https://api.github.com/users/alxhub/following{/other_user}",
        "gists_url": "https://api.github.com/users/alxhub/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/alxhub/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/alxhub/subscriptions",
        "organizations_url": "https://api.github.com/users/alxhub/orgs",
        "repos_url": "https://api.github.com/users/alxhub/repos",
        "events_url": "https://api.github.com/users/alxhub/events{/privacy}",
        "received_events_url": "https://api.github.com/users/alxhub/received_events",
        "type": "User",
        "site_admin": false
      },
      "committer": {
        "login": "kara",
        "id": 3871688,
        "node_id": "MDQ6VXNlcjM4NzE2ODg=",
        "avatar_url": "https://avatars3.githubusercontent.com/u/3871688?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/kara",
        "html_url": "https://github.com/kara",
        "followers_url": "https://api.github.com/users/kara/followers",
        "following_url": "https://api.github.com/users/kara/following{/other_user}",
        "gists_url": "https://api.github.com/users/kara/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/kara/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/kara/subscriptions",
        "organizations_url": "https://api.github.com/users/kara/orgs",
        "repos_url": "https://api.github.com/users/kara/repos",
        "events_url": "https://api.github.com/users/kara/events{/privacy}",
        "received_events_url": "https://api.github.com/users/kara/received_events",
        "type": "User",
        "site_admin": false
      },
      "parents": [
        {
          "sha": "9cabd6638e8573ab785fc59cee36111848ea367f",
          "url": "https://api.github.com/repos/angular/angular/commits/9cabd6638e8573ab785fc59cee36111848ea367f",
          "html_url": "https://github.com/angular/angular/commit/9cabd6638e8573ab785fc59cee36111848ea367f"
        }
      ]
    },
    {
      "sha": "9cabd6638e8573ab785fc59cee36111848ea367f",
      "node_id": "MDY6Q29tbWl0MjQxOTUzMzk6OWNhYmQ2NjM4ZTg1NzNhYjc4NWZjNTljZWUzNjExMTg0OGVhMzY3Zg==",
      "commit": {
        "author": {
          "name": "George Kalpakas",
          "email": "kalpakas.g@gmail.com",
          "date": "2019-12-05T19:02:57Z"
        },
        "committer": {
          "name": "Kara Erickson",
          "email": "karakara@google.com",
          "date": "2019-12-17T19:39:18Z"
        },
        "message": "refactor(ngcc): un-nest accidentally nested `describe()` blocks (#34437)\n\nPR Close #34437",
        "tree": {
          "sha": "bd758b139d3338a39f3cc85114e005fa784c40ad",
          "url": "https://api.github.com/repos/angular/angular/git/trees/bd758b139d3338a39f3cc85114e005fa784c40ad"
        },
        "url": "https://api.github.com/repos/angular/angular/git/commits/9cabd6638e8573ab785fc59cee36111848ea367f",
        "comment_count": 0,
        "verification": {
          "verified": false,
          "reason": "unsigned",
          "signature": null,
          "payload": null
        }
      },
      "url": "https://api.github.com/repos/angular/angular/commits/9cabd6638e8573ab785fc59cee36111848ea367f",
      "html_url": "https://github.com/angular/angular/commit/9cabd6638e8573ab785fc59cee36111848ea367f",
      "comments_url": "https://api.github.com/repos/angular/angular/commits/9cabd6638e8573ab785fc59cee36111848ea367f/comments",
      "author": {
        "login": "gkalpak",
        "id": 8604205,
        "node_id": "MDQ6VXNlcjg2MDQyMDU=",
        "avatar_url": "https://avatars2.githubusercontent.com/u/8604205?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/gkalpak",
        "html_url": "https://github.com/gkalpak",
        "followers_url": "https://api.github.com/users/gkalpak/followers",
        "following_url": "https://api.github.com/users/gkalpak/following{/other_user}",
        "gists_url": "https://api.github.com/users/gkalpak/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/gkalpak/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/gkalpak/subscriptions",
        "organizations_url": "https://api.github.com/users/gkalpak/orgs",
        "repos_url": "https://api.github.com/users/gkalpak/repos",
        "events_url": "https://api.github.com/users/gkalpak/events{/privacy}",
        "received_events_url": "https://api.github.com/users/gkalpak/received_events",
        "type": "User",
        "site_admin": false
      },
      "committer": {
        "login": "kara",
        "id": 3871688,
        "node_id": "MDQ6VXNlcjM4NzE2ODg=",
        "avatar_url": "https://avatars3.githubusercontent.com/u/3871688?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/kara",
        "html_url": "https://github.com/kara",
        "followers_url": "https://api.github.com/users/kara/followers",
        "following_url": "https://api.github.com/users/kara/following{/other_user}",
        "gists_url": "https://api.github.com/users/kara/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/kara/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/kara/subscriptions",
        "organizations_url": "https://api.github.com/users/kara/orgs",
        "repos_url": "https://api.github.com/users/kara/repos",
        "events_url": "https://api.github.com/users/kara/events{/privacy}",
        "received_events_url": "https://api.github.com/users/kara/received_events",
        "type": "User",
        "site_admin": false
      },
      "parents": [
        {
          "sha": "cd8a837956a2e5ad76c4ff86453c88b29dd696fa",
          "url": "https://api.github.com/repos/angular/angular/commits/cd8a837956a2e5ad76c4ff86453c88b29dd696fa",
          "html_url": "https://github.com/angular/angular/commit/cd8a837956a2e5ad76c4ff86453c88b29dd696fa"
        }
      ]
    }
  ]

  export default commitData;