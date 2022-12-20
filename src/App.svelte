<script>
  import 'svelte-material-ui/bare.css';
  import 'material-icons/iconfont/material-icons.css';

  import Counter from './Counter.svelte'
  import Accordion, { Panel, Header, Content } from '@smui-extra/accordion';
  import IconButton, { Icon } from '@smui/icon-button';

  let panel1Open = false;
  let panel2Open = false;
  let panel3Open = false;
  let panel4Open = false;
</script>

<h1>Playground</h1>

<div class="accordion-container">
  <Accordion>
    <Panel bind:open={panel1Open}>
      <Header>
        Panel 1
        <IconButton slot="icon" toggle pressed={panel1Open}>
          <Icon class="material-icons" on>expand_less</Icon>
          <Icon class="material-icons">expand_more</Icon>
        </IconButton>
      </Header>
      <Content>The content for panel 1.</Content>
    </Panel>
    <Panel bind:open={panel2Open}>
      <Header>
        Panel 2
        <IconButton slot="icon" toggle pressed={panel2Open}>
          <Icon class="material-icons" on>expand_less</Icon>
          <Icon class="material-icons">expand_more</Icon>
        </IconButton>
      </Header>
      <Content>The content for panel 2.</Content>
    </Panel>
    <Panel bind:open={panel3Open}>
      <Header>
        Panel 3
        <span slot="description">Description of panel 3.</span>
        <IconButton slot="icon" toggle pressed={panel3Open}>
          <Icon class="material-icons" on>expand_less</Icon>
          <Icon class="material-icons">expand_more</Icon>
        </IconButton>
      </Header>
      <Content>The content for panel 3.</Content>
    </Panel>
    <Panel bind:open={panel4Open}>
      <Header>
        Panel 4
        <span slot="description">Description of panel 4.</span>
        <IconButton slot="icon" toggle pressed={panel4Open}>
          <Icon class="material-icons" on>expand_less</Icon>
          <Icon class="material-icons">expand_more</Icon>
        </IconButton>
      </Header>
      <Content>The content for panel 4.</Content>
    </Panel>
  </Accordion>
</div>

<div class="card">
  <Counter />
</div>

<style>
  .card {
    padding: 20px;
    background: red;
  }
</style>
