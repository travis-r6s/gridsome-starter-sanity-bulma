# Gridsome + Sanity + Bulma 🚀

No more needs to be said.

### Start

Assuming you have the Santiy CLI (`@sanity/cli`) installed:
```sh
git clone git@github.com:thetre97/gridsome-starter-sanity-bulma.git project-name
# Gridsome setup
cd project-name
yarn
# Sanity setup
cd sanity
npm i
sanity init
npm run deploy
```

You will need to redeploy the GraphQL schema everytime you update the Sanity schema. This can easily be done with `npm run deploy`.

Copy the `.env.example` over to `.env`, and fill out the variables - you can get them from your now-configured Sanity project (`sanity.json`).

Then you can run the project:
```sh
# Sanity
cd sanity
npm run develop
# Gridsome
yarn develop
```

### Notes

This is an opinionated starter, which I use myself - so there may be a couple of oddities:

- I usually use Yarn, but it freaks out when installing Sanity (to do with Sanity using colons in path names, which doesn't agree with NTFS), so I use NPM to install teh studio dependencies.
