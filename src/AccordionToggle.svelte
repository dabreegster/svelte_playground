<script>
  import 'material-icons/iconfont/material-icons.css';
  import IconButton, { Icon } from '@smui/icon-button';

  export let open = false;
</script>

<IconButton toggle pressed={open}>
  <Icon class="material-icons" on>expand_less</Icon>
  <Icon class="material-icons">expand_more</Icon>
</IconButton>
