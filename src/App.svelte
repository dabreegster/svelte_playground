<script>
  import 'svelte-material-ui/bare.css';

  import AccordionToggle from './AccordionToggle.svelte'
  import Counter from './Counter.svelte'
  import Accordion, { Panel, Header, Content } from '@smui-extra/accordion';
  import Tab, { Label } from '@smui/tab';
  import TabBar from '@smui/tab-bar';
  import Button from '@smui/button';

  let panel1Open = false;
  let panel2Open = false;
  let panel3Open = false;
  let panel4Open = false;

  let activeTab = 'Residential';
</script>

<h1>Playground</h1>

  <Accordion>
    <Panel bind:open={panel1Open}>
      <Header>
        Panel 1
        <AccordionToggle slot="icon" open=panel1Open/>
      </Header>
      <Content>The content for panel 1.</Content>
    </Panel>
    <Panel bind:open={panel2Open}>
      <Header>
        Panel 2
        <AccordionToggle slot="icon" open=panel2Open/>
      </Header>
      <Content>The content for panel 2.</Content>
    </Panel>
    <Panel bind:open={panel3Open}>
      <Header>
        Panel 3
        <span slot="description">Description of panel 3.</span>
        <AccordionToggle slot="icon" open=panel3Open/>
      </Header>
      <Content>The content for panel 3.</Content>
    </Panel>
    <Panel bind:open={panel4Open}>
      <Header>
        Panel 4
        <span slot="description">Description of panel 4.</span>
        <AccordionToggle slot="icon" open=panel4Open/>
      </Header>
      <Content>The content for panel 4.</Content>
    </Panel>
  </Accordion>

<div class="card">
  <Counter />
</div>

<div>
  <TabBar tabs={['Residential', 'Commercial', 'Other']} let:tab bind:activeTab>
    <Tab {tab}>
      <Label>{tab}</Label>
    </Tab>
  </TabBar>
{#if activeTab == 'Residential'}
<p>Form 1</p>
{:else if activeTab == 'Commercial'}
<p>Form 2</p>
{:else if activeTab == 'Other'}
<p>Form 3</p>
{/if}
</div>

<style>
  .card {
    padding: 20px;
    background: red;
  }
</style>
