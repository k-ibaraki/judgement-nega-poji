<script>
  import './styles.scss';
  import { Router, Link, Route } from 'svelte-routing';
  import NegaPosi from './NegaPosi.svelte';
  import { PageNotFound, Redirect } from './components';

  export let url = '';
</script>

<div class="section columns">
  <Router {url}>
    <main class="column">
      <div>
        <Route path="/">
          <Redirect path="/negaposi" />
        </Route>
        <Route path="/negaposi" component={NegaPosi} />
        <Route path="**" component={PageNotFound} />
      </div>
    </main>
  </Router>
</div>
