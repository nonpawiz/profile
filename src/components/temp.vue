<script>
import { RouterLink, RouterView } from "vue-router";
import Spinner from './components/spinner.vue'
export default {
}
</script>
<template>
 <!-- <Spinner class="text-center"/> -->
  <main class="main" id="top">
      <div class="container" data-layout="container">
          <nav class="navbar navbar-light navbar-vertical navbar-expand-xl">
            <div class="d-flex align-items-center">
              <div class="toggle-icon-wrapper">
  
                <button class="btn navbar-toggler-humburger-icon navbar-vertical-toggle" data-bs-toggle="tooltip" data-bs-placement="left" title="Toggle Navigation"><span class="navbar-toggle-icon"><span class="toggle-line"></span></span></button>
  
              </div><a class="navbar-brand" href="index.html">
                <div class="d-flex align-items-center py-3"><img class="me-2" src="src/assets/img/loso.png" alt="" width="40" /><span class="font-sans-serif">nonpawit</span>
                </div>
              </a>
            </div>
            <div class="collapse navbar-collapse" id="navbarVerticalCollapse">
              <div class="navbar-vertical-content scrollbar">
                <ul class="navbar-nav flex-column mb-3" id="navbarVerticalNav">
                  
                  <li class="nav-item">
                    <!-- label-->
                    <div class="row navbar-vertical-label-wrapper mt-3 mb-2">
                      <div class="col-auto navbar-vertical-label">Profile
                      </div>
                      <div class="col ps-0">
                        <hr class="mb-0 navbar-vertical-divider" />
                      </div>
                    </div>
                    <div >
                      <RouterLink to="/">
                      <!-- parent pages--><a id="prof" class="nav-link"  role="button" aria-expanded="false" >
                        <div class="d-flex align-items-center"><span class="nav-link-icon"><span class="fas fa-user" ></span></span><span class="nav-link-text ps-1"> Profile</span>
                        </div>
                      </a>
                      </RouterLink>
                    </div>
                    <RouterLink to="/skills">
                    <!-- parent pages--><a class="nav-link" id="skill"  role="button" aria-expanded="false">
                      <div class="d-flex align-items-center"><span class="nav-link-icon"><span class="fas fa-home"></span></span><span class="nav-link-text ps-1"> Skills</span>
                      </div>
                    </a>
                    </RouterLink>
                  </li>
                  <li class="nav-item">
                    <!-- label-->
                    <div class="row navbar-vertical-label-wrapper mt-3 mb-2">
                      <div class="col-auto navbar-vertical-label">App
                      </div>
                      <div class="col ps-0">
                        <hr class="mb-0 navbar-vertical-divider" />
                      </div>
                    </div>
                    <!-- parent pages--><a class="nav-link" href="app/calendar.html" role="button" aria-expanded="false">
                      <div class="d-flex align-items-center"><span class="nav-link-icon"><span class="fas fa-calendar-alt"></span></span><span class="nav-link-text ps-1">Calendar</span>
                      </div>
                    </a>
                    <!-- parent pages--><a class="nav-link" href="app/chat.html" role="button" aria-expanded="false">
                      <div class="d-flex align-items-center"><span class="nav-link-icon"><span class="fas fa-comments"></span></span><span class="nav-link-text ps-1">Chat</span>
                      </div>
                    </a>
                    <!-- parent pages--><a class="nav-link dropdown-indicator" href="#email" role="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="email">
                      <div class="d-flex align-items-center"><span class="nav-link-icon"><span class="fas fa-envelope-open"></span></span><span class="nav-link-text ps-1">Email</span>
                      </div>
                    </a>
                    <ul class="nav collapse false" id="email">
                      <li class="nav-item"><a class="nav-link" href="app/email/inbox.html" aria-expanded="false">
                          <div class="d-flex align-items-center"><span class="nav-link-text ps-1">Inbox</span>
                          </div>
                        </a>
                        <!-- more inner pages-->
                      </li>
                      <li class="nav-item"><a class="nav-link" href="app/email/email-detail.html" aria-expanded="false">
                          <div class="d-flex align-items-center"><span class="nav-link-text ps-1">Email detail</span>
                          </div>
                        </a>
                        <!-- more inner pages-->
                      </li>
                      <li class="nav-item"><a class="nav-link" href="app/email/compose.html" aria-expanded="false">
                          <div class="d-flex align-items-center"><span class="nav-link-text ps-1">Compose</span>
                          </div>
                        </a>
                        <!-- more inner pages-->
                      </li>
                    </ul>
                    <!-- parent pages--><a class="nav-link dropdown-indicator" href="#events" role="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="events">
                      <div class="d-flex align-items-center"><span class="nav-link-icon"><span class="fas fa-calendar-day"></span></span><span class="nav-link-text ps-1">Events</span>
                      </div>
                    </a>
                    <ul class="nav collapse false" id="events">
                      <li class="nav-item"><a class="nav-link" href="app/events/create-an-event.html" aria-expanded="false">
                          <div class="d-flex align-items-center"><span class="nav-link-text ps-1">Create an event</span>
                          </div>
                        </a>
                        <!-- more inner pages-->
                      </li>
                      <li class="nav-item"><a class="nav-link" href="app/events/event-detail.html" aria-expanded="false">
                          <div class="d-flex align-items-center"><span class="nav-link-text ps-1">Event detail</span>
                          </div>
                        </a>
                        <!-- more inner pages-->
                      </li>
                      <li class="nav-item"><a class="nav-link" href="app/events/event-list.html" aria-expanded="false">
                          <div class="d-flex align-items-center"><span class="nav-link-text ps-1">Event list</span>
                          </div>
                        </a>
                        <!-- more inner pages-->
                      </li>
                    </ul>
                    <!-- parent pages--><a class="nav-link dropdown-indicator" href="#e-commerce" role="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="e-commerce">
                      <div class="d-flex align-items-center"><span class="nav-link-icon"><span class="fas fa-shopping-cart"></span></span><span class="nav-link-text ps-1">E commerce</span>
                      </div>
                    </a>
                    <ul class="nav collapse false" id="e-commerce">
                      <li class="nav-item"><a class="nav-link dropdown-indicator" href="#product" data-bs-toggle="collapse" aria-expanded="false" aria-controls="e-commerce">
                          <div class="d-flex align-items-center"><span class="nav-link-text ps-1">Product</span>
                          </div>
                        </a>
                        <!-- more inner pages-->
                        <ul class="nav collapse false" id="product">
                          <li class="nav-item"><a class="nav-link" href="app/e-commerce/product/product-list.html" aria-expanded="false">
                              <div class="d-flex align-items-center"><span class="nav-link-text ps-1">Product list</span>
                              </div>
                            </a>
                            <!-- more inner pages-->
                          </li>
                          <li class="nav-item"><a class="nav-link" href="app/e-commerce/product/product-grid.html" aria-expanded="false">
                              <div class="d-flex align-items-center"><span class="nav-link-text ps-1">Product grid</span>
                              </div>
                            </a>
                            <!-- more inner pages-->
                          </li>
                          <li class="nav-item"><a class="nav-link" href="app/e-commerce/product/product-details.html" aria-expanded="false">
                              <div class="d-flex align-items-center"><span class="nav-link-text ps-1">Product details</span>
                              </div>
                            </a>
                            <!-- more inner pages-->
                          </li>
                        </ul>
                      </li>
                      <li class="nav-item"><a class="nav-link dropdown-indicator" href="#orders" data-bs-toggle="collapse" aria-expanded="false" aria-controls="e-commerce">
                          <div class="d-flex align-items-center"><span class="nav-link-text ps-1">Orders</span>
                          </div>
                        </a>
                        <!-- more inner pages-->
                        <ul class="nav collapse false" id="orders">
                          <li class="nav-item"><a class="nav-link" href="app/e-commerce/orders/order-list.html" aria-expanded="false">
                              <div class="d-flex align-items-center"><span class="nav-link-text ps-1">Order list</span>
                              </div>
                            </a>
                            <!-- more inner pages-->
                          </li>
                          <li class="nav-item"><a class="nav-link" href="app/e-commerce/orders/order-details.html" aria-expanded="false">
                              <div class="d-flex align-items-center"><span class="nav-link-text ps-1">Order details</span>
                              </div>
                            </a>
                            <!-- more inner pages-->
                          </li>
                        </ul>
                      </li>
                      <li class="nav-item"><a class="nav-link" href="app/e-commerce/customers.html" aria-expanded="false">
                          <div class="d-flex align-items-center"><span class="nav-link-text ps-1">Customers</span>
                          </div>
                        </a>
                        <!-- more inner pages-->
                      </li>
                      <li class="nav-item"><a class="nav-link" href="app/e-commerce/customer-details.html" aria-expanded="false">
                          <div class="d-flex align-items-center"><span class="nav-link-text ps-1">Customer details</span>
                          </div>
                        </a>
                        <!-- more inner pages-->
                      </li>
                      <li class="nav-item"><a class="nav-link" href="app/e-commerce/shopping-cart.html" aria-expanded="false">
                          <div class="d-flex align-items-center"><span class="nav-link-text ps-1">Shopping cart</span>
                          </div>
                        </a>
                        <!-- more inner pages-->
                      </li>
                      <li class="nav-item"><a class="nav-link" href="app/e-commerce/checkout.html" aria-expanded="false">
                          <div class="d-flex align-items-center"><span class="nav-link-text ps-1">Checkout</span>
                          </div>
                        </a>
                        <!-- more inner pages-->
                      </li>
                      <li class="nav-item"><a class="nav-link" href="app/e-commerce/billing.html" aria-expanded="false">
                          <div class="d-flex align-items-center"><span class="nav-link-text ps-1">Billing</span>
                          </div>
                        </a>
                        <!-- more inner pages-->
                      </li>
                      <li class="nav-item"><a class="nav-link" href="app/e-commerce/invoice.html" aria-expanded="false">
                          <div class="d-flex align-items-center"><span class="nav-link-text ps-1">Invoice</span>
                          </div>
                        </a>
                        <!-- more inner pages-->
                      </li>
                    </ul>
                    <!-- parent pages--><a class="nav-link" href="app/kanban.html" role="button" aria-expanded="false">
                      <div class="d-flex align-items-center"><span class="nav-link-icon"><span class="fab fa-trello"></span></span><span class="nav-link-text ps-1">Kanban</span>
                      </div>
                    </a>
                    <!-- parent pages--><a class="nav-link dropdown-indicator" href="#social" role="button" data-bs-toggle="collapse" aria-expanded="false" aria-controls="social">
                      <div class="d-flex align-items-center"><span class="nav-link-icon"><span class="fas fa-share-alt"></span></span><span class="nav-link-text ps-1">Social</span>
                      </div>
                    </a>
                    <ul class="nav collapse false" id="social">
                      <li class="nav-item"><a class="nav-link" href="app/social/feed.html" aria-expanded="false">
                          <div class="d-flex align-items-center"><span class="nav-link-text ps-1">Feed</span>
                          </div>
                        </a>
                        <!-- more inner pages-->
                      </li>
                      <li class="nav-item"><a class="nav-link" href="app/social/activity-log.html" aria-expanded="false">
                          <div class="d-flex align-items-center"><span class="nav-link-text ps-1">Activity log</span>
                          </div>
                        </a>
                        <!-- more inner pages-->
                      </li>
                      <li class="nav-item"><a class="nav-link" href="app/social/notifications.html" aria-expanded="false">
                          <div class="d-flex align-items-center"><span class="nav-link-text ps-1">Notifications</span>
                          </div>
                        </a>
                        <!-- more inner pages-->
                      </li>
                      <li class="nav-item"><a class="nav-link" href="app/social/followers.html" aria-expanded="false">
                          <div class="d-flex align-items-center"><span class="nav-link-text ps-1">Followers</span>
                          </div>
                        </a>
                        <!-- more inner pages-->
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div class="content">
            <nav class="navbar navbar-light navbar-glass navbar-top navbar-expand">
  
              <button class="btn navbar-toggler-humburger-icon navbar-toggler me-1 me-sm-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarVerticalCollapse" aria-controls="navbarVerticalCollapse" aria-expanded="false" aria-label="Toggle Navigation"><span class="navbar-toggle-icon"><span class="toggle-line"></span></span></button>
              <a class="navbar-brand me-1 me-sm-3" href="">
                <div class="d-flex align-items-center"><img class="me-2" src="src/assets/img/loso.png" alt="" width="40" /><span class="font-sans-serif">nonpawit</span>
                </div>
              </a>
              <ul class="navbar-nav align-items-center d-none d-lg-block">
                <li class="nav-item">
                  <div class="search-box" data-list='{"valueNames":["title"]}'>
                    <form class="position-relative" data-bs-toggle="search" data-bs-display="static">
                      <input class="form-control search-input fuzzy-search" type="search" placeholder="Search..." aria-label="Search" />
                      <span class="fas fa-search search-box-icon"></span>
  
                    </form>
                    <div class="btn-close-falcon-container position-absolute end-0 top-50 translate-middle shadow-none" data-bs-dismiss="search">
                      <div class="btn-close-falcon" aria-label="Close"></div>
                    </div>
                    <div class="dropdown-menu border font-base start-0 mt-2 py-0 overflow-hidden w-100">
                      <div class="scrollbar list py-3" style="max-height: 24rem;">
                        <h6 class="dropdown-header fw-medium text-uppercase px-card fs--2 pt-0 pb-2">Recently Browsed</h6><a class="dropdown-item fs--1 px-card py-1 hover-primary" href="app/events/event-detail.html">
                          <div class="d-flex align-items-center">
                            <span class="fas fa-circle me-2 text-300 fs--2"></span>
  
                            <div class="fw-normal title">Pages <span class="fas fa-chevron-right mx-1 text-500 fs--2" data-fa-transform="shrink-2"></span> Events</div>
                          </div>
                        </a>
                        <a class="dropdown-item fs--1 px-card py-1 hover-primary" href="app/e-commerce/customers.html">
                          <div class="d-flex align-items-center">
                            <span class="fas fa-circle me-2 text-300 fs--2"></span>
  
                            <div class="fw-normal title">E-commerce <span class="fas fa-chevron-right mx-1 text-500 fs--2" data-fa-transform="shrink-2"></span> Customers</div>
                          </div>
                        </a>
  
                        <hr class="bg-200 dark__bg-900" />
                        <h6 class="dropdown-header fw-medium text-uppercase px-card fs--2 pt-0 pb-2">Suggested Filter</h6><a class="dropdown-item px-card py-1 fs-0" href="app/e-commerce/customers.html">
                          <div class="d-flex align-items-center"><span class="badge fw-medium text-decoration-none me-2 badge-soft-warning">customers:</span>
                            <div class="flex-1 fs--1 title">All customers list</div>
                          </div>
                        </a>
                        <a class="dropdown-item px-card py-1 fs-0" href="app/events/event-detail.html">
                          <div class="d-flex align-items-center"><span class="badge fw-medium text-decoration-none me-2 badge-soft-success">events:</span>
                            <div class="flex-1 fs--1 title">Latest events in current month</div>
                          </div>
                        </a>
                        <a class="dropdown-item px-card py-1 fs-0" href="app/e-commerce/product/product-grid.html">
                          <div class="d-flex align-items-center"><span class="badge fw-medium text-decoration-none me-2 badge-soft-info">products:</span>
                            <div class="flex-1 fs--1 title">Most popular products</div>
                          </div>
                        </a>
  
                        <hr class="bg-200 dark__bg-900" />
                        <h6 class="dropdown-header fw-medium text-uppercase px-card fs--2 pt-0 pb-2">Files</h6><a class="dropdown-item px-card py-2" href="#!">
                          <div class="d-flex align-items-center">
                            <div class="file-thumbnail me-2"><img class="border h-100 w-100 fit-cover rounded-3" src="src/assets/img/products/3-thumb.png" alt="" /></div>
                            <div class="flex-1">
                              <h6 class="mb-0 title">iPhone</h6>
                              <p class="fs--2 mb-0 d-flex"><span class="fw-semi-bold">Antony</span><span class="fw-medium text-600 ms-2">27 Sep at 10:30 AM</span></p>
                            </div>
                          </div>
                        </a>
                        <a class="dropdown-item px-card py-2" href="#!">
                          <div class="d-flex align-items-center">
                            <div class="file-thumbnail me-2"><img class="img-fluid" src="src/assets/img/icons/zip.png" alt="" /></div>
                            <div class="flex-1">
                              <h6 class="mb-0 title">Falcon v1.8.2</h6>
                              <p class="fs--2 mb-0 d-flex"><span class="fw-semi-bold">John</span><span class="fw-medium text-600 ms-2">30 Sep at 12:30 PM</span></p>
                            </div>
                          </div>
                        </a>
  
                        <hr class="bg-200 dark__bg-900" />
                        <h6 class="dropdown-header fw-medium text-uppercase px-card fs--2 pt-0 pb-2">Members</h6><a class="dropdown-item px-card py-2" href="pages/user/profile.html">
                          <div class="d-flex align-items-center">
                            <div class="avatar avatar-l status-online me-2">
                              <img class="rounded-circle" src="src/assets/img/team/1.jpg" alt="" />
  
                            </div>
                            <div class="flex-1">
                              <h6 class="mb-0 title">Anna Karinina</h6>
                              <p class="fs--2 mb-0 d-flex">Technext Limited</p>
                            </div>
                          </div>
                        </a>
                        <a class="dropdown-item px-card py-2" href="pages/user/profile.html">
                          <div class="d-flex align-items-center">
                            <div class="avatar avatar-l me-2">
                              <img class="rounded-circle" src="src/assets/img/team/2.jpg" alt="" />
  
                            </div>
                            <div class="flex-1">
                              <h6 class="mb-0 title">Antony Hopkins</h6>
                              <p class="fs--2 mb-0 d-flex">Brain Trust</p>
                            </div>
                          </div>
                        </a>
                        <a class="dropdown-item px-card py-2" href="pages/user/profile.html">
                          <div class="d-flex align-items-center">
                            <div class="avatar avatar-l me-2">
                              <img class="rounded-circle" src="src/assets/img/team/3.jpg" alt="" />
  
                            </div>
                            <div class="flex-1">
                              <h6 class="mb-0 title">Emma Watson</h6>
                              <p class="fs--2 mb-0 d-flex">Google</p>
                            </div>
                          </div>
                        </a>
  
                      </div>
                      <div class="text-center mt-n3">
                        <p class="fallback fw-bold fs-1 d-none">No Result Found.</p>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
              <ul class="navbar-nav navbar-nav-icons ms-auto flex-row align-items-center">
                <li class="nav-item">
                  <div class="theme-control-toggle fa-icon-wait px-2">
                    <input class="form-check-input ms-0 theme-control-toggle-input" id="themeControlToggle" type="checkbox" data-theme-control="theme" value="dark" />
                    <label class="mb-0 theme-control-toggle-label theme-control-toggle-light" for="themeControlToggle" data-bs-toggle="tooltip" data-bs-placement="left" title="Switch to light theme"><span class="fas fa-sun fs-0"></span></label>
                    <label class="mb-0 theme-control-toggle-label theme-control-toggle-dark" for="themeControlToggle" data-bs-toggle="tooltip" data-bs-placement="left" title="Switch to dark theme"><span class="fas fa-moon fs-0"></span></label>
                  </div>
                </li>
                
                <li class="nav-item dropdown mt-1"><a class="nav-link pe-0" id="navbarDropdownUser" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <div class="avatar avatar-xl">
                      <img class="rounded-circle" src="src/assets/img/user.jpg" alt="" />
  
                    </div>
                  </a>
                  <div class="dropdown-menu dropdown-menu-end py-0" aria-labelledby="navbarDropdownUser">
                    <div class="bg-white dark__bg-1000 rounded-2 py-2">
                
                      <a class="dropdown-item" href="#!">Set status</a>
                      <a class="dropdown-item" href="pages/user/profile.html">Profile &amp; account</a>
                      <a class="dropdown-item" href="#!">Feedback</a>
                      <div class="dropdown-divider"></div>
                      <a class="dropdown-item" href="pages/user/settings.html">Settings</a>
                      <a class="dropdown-item" href="pages/authentication/card/logout.html">Logout</a>
                    </div>
                  </div>
                </li>
              </ul>
            </nav>
              <div class="container">
                <RouterView/>
              </div>
              <div class="mt-2 text-center">
                <span class="text-secondary">Nonpawit-CV © 2022</span> 
              </div>
          </div>
      </div>
    </main>
</template>

<style>
  a:link{
    text-decoration: none;
  }
</style>






