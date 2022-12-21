<script>
  import "svelte-material-ui/bare.css";

  import AccordionToggle from "./AccordionToggle.svelte";
  import Counter from "./Counter.svelte";
  import Accordion, { Panel, Header, Content } from "@smui-extra/accordion";
  import Tab, { Label } from "@smui/tab";
  import TabBar from "@smui/tab-bar";
  import Button from "@smui/button";

  let panel1 = false;
  let panel2 = false;

  let activeTab = "Residential";
</script>

<h1>Playground</h1>

<Accordion>
  <Panel bind:open={panel1}>
    <Header>
      Counter
      <AccordionToggle slot="icon" open="panel1" />
    </Header>
    <Content>
      The content for panel 1.
      <div class="card">
        <Counter />
      </div>
    </Content>
  </Panel>
  <Panel bind:open={panel2}>
    <Header>
      3 forms with tabs
      <AccordionToggle slot="icon" open="panel2" />
    </Header>
    <Content>
      The content for panel 2.
      <div>
        <TabBar
          tabs={["Residential", "Commercial", "Other"]}
          let:tab
          bind:active={activeTab}
        >
          <Tab {tab}>
            <Label>{tab}</Label>
          </Tab>
        </TabBar>
        {#if activeTab == "Residential"}
          <p>Form 1</p>
        {:else if activeTab == "Commercial"}
          <p>Form 2</p>
        {:else if activeTab == "Other"}
          <p>Form 3</p>
        {/if}
      </div>
    </Content>
  </Panel>
</Accordion>

<style>
  .card {
    padding: 20px;
    background: red;
  }
</style>
