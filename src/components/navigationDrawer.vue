<template>
<div>
    <v-app-bar color="light">
        <v-spacer>
        </v-spacer>
        <vs-button to='/' danger style="position : absolute ; float : right">تسجيل خروج<i class='bx bx-exit'></i></vs-button>

        <v-app-bar-nav-icon @click="activeSidebar = !activeSidebar"></v-app-bar-nav-icon>
    </v-app-bar>

    <vs-sidebar right dir="rtl" absolute v-model="isActive" :open.sync="activeSidebar">
        <template #logo>
            <!-- ...img logo -->
        </template>

        <vs-sidebar-item id="home" to='/home'>
            <template #icon>
                <i class='bx bx-home'></i>
            </template>
            الصفحة الرئيسية
        </vs-sidebar-item>

        <vs-sidebar-group>
            <template #header>
                <vs-sidebar-item arrow>
                    <template #icon>
                        <i class='bx bxs-lock'></i>
                    </template>
                    التأمين و السرية
                </vs-sidebar-item>
            </template>
            <vs-sidebar-item style="margin-right:25px" id="groups" to='/groups'>
                <template #icon>
                    <i class='bx bxs-group'></i>
                </template>
                مجموعات الجهات
            </vs-sidebar-item>
            <vs-sidebar-item style="margin-right:25px" id="users" to='/users'>
                <template #icon>
                    <i class='bx bxs-group'></i>
                </template>
                المستخدمين
            </vs-sidebar-item>
            <vs-sidebar-item style="margin-right:25px" id="category" to='/category'>
                <template #icon>
                    <i class='bx bxs-group'></i>
                </template>
                تصنيف الجهات
            </vs-sidebar-item>
            <vs-sidebar-item style="margin-right:25px" id="pages" to='/pages'>
                <template #icon>
                    <i class='bx bxs-group'></i>
                </template>
                الصفحات
            </vs-sidebar-item>
        </vs-sidebar-group>

        <vs-sidebar-group>
            <template #header>
                <vs-sidebar-item arrow>
                    <template #icon>
                        <i class='bx bxs-ev-station'></i>
                    </template>
                    المحروقات
                </vs-sidebar-item>
            </template>
            <vs-sidebar-item style="margin-right:25px" id="petrolTypes" to='/petrolTypes'>
                <template #icon>
                    <i class='bx bxs-ev-station'></i>
                </template>
                أنواع المحروقات
            </vs-sidebar-item>
            <vs-sidebar-item style="margin-right:25px" id="petrol" to='/petrol'>
                <template #icon>
                    <i class='bx bxs-ev-station'></i>
                </template>
                المحروقات
            </vs-sidebar-item>
        </vs-sidebar-group>

        <vs-sidebar-group>
            <template #header>
                <vs-sidebar-item arrow>
                    <template #icon>
                        <i class='bx bxs-car'></i>
                    </template>
                    المركبات
                </vs-sidebar-item>
            </template>
            <vs-sidebar-item style="margin-right:25px" id="vehiclesTypes" to='/vehiclesTypes'>
                <template #icon>
                    <i class='bx bx-car'></i>
                </template>
                أنواع المركبات
            </vs-sidebar-item>
            <vs-sidebar-item style="margin-right:25px" id="vehiclesScreen1" to='/vehiclesScreen1'>
                <template #icon>
                    <i class='bx bx-car'></i>
                </template>
                مدرعات
            </vs-sidebar-item>
            <vs-sidebar-item style="margin-right:25px" id="vehiclesScreen2" to='/vehiclesScreen2'>
                <template #icon>
                    <i class='bx bx-car'></i>
                </template>
                المركبات
            </vs-sidebar-item>
            <vs-sidebar-item style="margin-right:25px" id="vehiclesScreen3" to='/vehiclesScreen3'>
                <template #icon>
                    <i class='bx bx-car'></i>
                </template>
                معدات الاشارة
            </vs-sidebar-item>
            <vs-sidebar-item style="margin-right:25px" id="vehiclesScreen4" to='/vehiclesScreen4'>
                <template #icon>
                    <i class='bx bx-car'></i>
                </template>
                معدات م ع
            </vs-sidebar-item>

            <vs-sidebar-group>
                <template #header>
                    <vs-sidebar-item arrow>
                        <template #icon>
                            <i class='bx bxs-car'></i>
                        </template>
                        الزيوت
                    </vs-sidebar-item>
                </template>
                <vs-sidebar-item style="margin-right:25px" id="vehicleoil" to='/vehicleoil'>
                    <template #icon>
                        <i class='bx bx-car'></i>
                    </template>
                    انواع زيوت المركبات
                </vs-sidebar-item>
                <vs-sidebar-item style="margin-right:25px" id="voTypess" to='/voTabllle'>
                    <template #icon>
                        <i class='bx bx-car'></i>
                    </template>
                    زيوت المركبات
                </vs-sidebar-item>
                <vs-sidebar-item style="margin-right:25px" id="unitvoil" to='/unitV'>
                    <template #icon>
                        <i class='bx bx-car'></i>
                    </template>
                    وحدات زيوت المركبات
                </vs-sidebar-item>

            </vs-sidebar-group>

            <vs-sidebar-item style="margin-right:25px" id="vehicleoil" to='/vehicleoil'>
                <template #icon>
                    <i class='bx bx-car'></i>
                </template>
                انواع زيوت المركبات
            </vs-sidebar-item>
            <vs-sidebar-item style="margin-right:25px" id="voTypess" to='/voTabllle'>
                <template #icon>
                    <i class='bx bx-car'></i>
                </template>
                زيوت المركبات
            </vs-sidebar-item>
            <vs-sidebar-item style="margin-right:25px" id="unitvoil" to='/unitV'>
                <template #icon>
                    <i class='bx bx-car'></i>
                </template>
                وحدات زيوت المركبات
            </vs-sidebar-item>
        </vs-sidebar-group>

        <vs-sidebar-group>
            <template #header>
                <vs-sidebar-item arrow>
                    <template #icon>
                        <i class='bx bxs-calendar'></i>
                    </template>
                    العام التدريبي
                </vs-sidebar-item>
            </template>
            <vs-sidebar-item style="margin-right:25px" id="year" to='/year'>
                <template #icon>
                    <i class='bx bx-calendar'></i>
                </template>
                العام التدريبي
            </vs-sidebar-item>
            <vs-sidebar-item style="margin-right:25px" id="period" to='/period'>
                <template #icon>
                    <i class='bx bx-calendar'></i>
                </template>
                الفترة التدريبية
            </vs-sidebar-item>
        </vs-sidebar-group>

        <vs-sidebar-item id="allunits" to='/allUnits'>
            <template #icon>
                <i class='bx bx-home'></i>
            </template>
            حساب الوحدات
        </vs-sidebar-item>

        <vs-sidebar-item id="reportts" to='/reportts'>
            <template #icon>
                <i class='bx bx-home'></i>
            </template>
            التقارير
        </vs-sidebar-item>

    </vs-sidebar>
</div>
</template>

<script>
export default {
    data: () => ({
        isActive: 'home',
        activeSidebar: false,
    }),
}
</script>

<style>

</style>
