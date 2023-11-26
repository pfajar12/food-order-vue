<script setup>
import NavbarMenu from './NavbarMenu.vue'
import MenuList from './MenuList.vue'
import PaymentView from './PaymentView.vue'
</script>

<template>
    <NavbarMenu></NavbarMenu>

    <div class="col-12">
        <div class="row">
            <div class="col-12 col-md-8 col-lg-9 mb-3">
                <MenuList></MenuList>
            </div>

            <div class="col-12 col-md-4 col-lg-3">
                <PaymentView></PaymentView>
            </div>
        </div>
    </div>
</template>