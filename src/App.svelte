<script>
  import "svelte-material-ui/bare.css";

  import AccordionToggle from "./AccordionToggle.svelte";
  import Counter from "./Counter.svelte";
  import Accordion, { Panel, Header, Content } from "@smui-extra/accordion";
  import Tab, { Label } from "@smui/tab";
  import TabBar from "@smui/tab-bar";
  import Button from "@smui/button";
  import { onMount } from "svelte";
  import { Map } from "maplibre-gl";

  import init, { JsStreetNetwork } from "osm2streets-js";
  import osmInput from "./assets/input.osm?raw";
  import boundaryGeojson from "./assets/boundary.json?raw";

  let panel1 = false;
  let panel2 = false;
  let panel3 = false;

  let activeTab = "Residential";

  let mapContainer;
  let map;

  async function osm2streets() {
    await init();
    console.log(`Importing streets`);
    const streets = new JsStreetNetwork(osmInput, boundaryGeojson, {
      debug_each_step: false,
      dual_carriageway_experiment: false,
      cycletrack_snapping_experiment: false,
      inferred_sidewalks: false,
      osm2lanes: false,
    });
    await new Promise((r) => setTimeout(r, 5000));
    return streets.toGeojsonPlain();
  }

  onMount(async () => {
    map = new Map({
      container: mapContainer,
      style:
        "https://api.maptiler.com/maps/streets/style.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL",
    });
  });
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
  <Panel bind:open={panel3}>
    <Header>
      osm2streets
      <AccordionToggle slot="icon" open="panel3" />
    </Header>
    <Content>
      {#await osm2streets()}
        <p>Loading...</p>
      {:then geojson}
        <pre>{geojson}</pre>
      {/await}
    </Content>
  </Panel>
</Accordion>

<div class="map" bind:this={mapContainer} />

<style>
  .card {
    padding: 20px;
    background: red;
  }

  .map {
    width: 100%;
    height: 400px;
  }
</style>
