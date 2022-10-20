<template>
  <div
    class="d-flex flex-column flex-shrink-0 p-3 bg-light vh-100"
    style="max-width: 280px"
  >
    <a
      href="/"
      class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
    >
      <span class="fs-3">Cash Control</span>
    </a>
    <hr>
    <ul class="nav nav-pills flex-column mb-auto">
      <li class="nav-item my-2">
        <router-link
          to="/dashboard"
          class="nav-link"
          aria-current="page"
        >
          <div class="d-flex gap-2 p-1">
            <IconCommunity />
            <h2>Dashboard</h2>
          </div>
        </router-link>
      </li>
      <li class="nav-item my-2">
        <router-link
          to="/stats"
          class="nav-link"
          aria-current="page"
        >
          <div class="d-flex gap-2 p-1">
            <IconDocumentation />
            <h2>Stats</h2>
          </div>
        </router-link>
      </li>
      <li class="nav-item my-2">
        <router-link
          to="/support"
          class="nav-link"
          aria-current="page"
        >
          <div class="d-flex gap-2 p-1">
            <IconSupport />
            <h2>Support</h2>
          </div>
        </router-link>
      </li>
    </ul>
    <hr>
    <div class="dropdown">
      <a
        id="dropdownUser2"
        href="#"
        class="d-flex align-items-center link-dark text-decoration-none dropdown-toggle"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <img
          src="https://github.com/mdo.png"
          alt=""
          width="32"
          height="32"
          class="rounded-circle me-2"
        >
        <strong>user</strong>
      </a>
      <ul
        class="dropdown-menu text-small shadow"
        aria-labelledby="dropdownUser2"
      >
        <li>
          <a
            class="dropdown-item"
            href="#"
          >New project...</a>
        </li>
        <li>
          <a
            class="dropdown-item"
            href="#"
          >Settings</a>
        </li>
        <li>
          <a
            class="dropdown-item"
            href="#"
          >Profile</a>
        </li>
        <li><hr class="dropdown-divider"></li>
        <li>
          <a
            class="dropdown-item"
            href="#"
          >Sign out</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import IconCommunity from "../icons/IconCommunity.vue";
import IconDocumentation from "../icons/IconDocumentation.vue";
import IconSupport from "../icons/IconSupport.vue";
</script>

<style>
.router-link-exact-active {
  background-color: rgb(73, 73, 255) !important;
  color: white !important;
}
</style>
