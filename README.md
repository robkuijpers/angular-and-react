Based on: https://blog.nrwl.io/building-angular-and-react-applications-together-with-nx-78b5578de598

> npx --ignore-existing create-nx-workspace happynrwl --preset=empty

  (v15.9.1 workspace)

> yarn add -D @nrwl/angular

> yarn nx g @nrwl/angular:application angularapp


> yarn add -D @nrwl/react

> yarn nx generate @nrwl/react:app reactapp 

> yarn add -D @nrwl/web

npm 8.11.0
yarn 1.22.11
node 16.16.0

https://nx.dev/packages/nx/documents/generate

> yarn nx generate @nrwl/angular:library myangularlibrary
> yarn nx generate @nrwl/react:library myreactlibrary

> yarn nx lib ui --framework=none

> nx serve reactapp       serves the React app
> nx build reactapp       builds the React app
> nx test reactapp        tests the React app using Jest
> nx e2e reactapp-e2e     tests the React app using Cypres

> yarn nx dep-graph

