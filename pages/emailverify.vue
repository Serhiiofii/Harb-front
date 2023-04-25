<template>
    <div class="bg-gray-50 h-screen">
        <HeaderNav />
        <div class="lg:w-1/3 md:w-2/3 w-full bg-white mx-auto p-6 my-20 shadow-md rounded-sm">
            <div class="text-center">
                <div class="mb-3">
                    <img src="/icons/verification.png" width="100" class="mx-auto" alt="">
                </div>
                <div class="text-sm">We just sent an email to the address: {{ email }}</div>
                <div class="text-sm">Please check your email and click on the link provided to verify your address.</div>
            </div>
            <div class="my-3">
                <div @click="showChangeEmail" class="text-center text-sm cursor-pointer hover:underline mb-2">Change Email
                </div>
                <div class="flex mb-5" v-show="showEmailFlag">
                    <input type="email" class="
                    p-3
                    w-full
                    rounded-sm
                    border border-gray-200
                    rounded-sm
                    text-sm
                    " v-model="updatingEmail" placeholder="e,g johndoe@gmail.com" />
                    <button @click="clickUpdateResend" class="text-sm bg-blue-600 px-1 text-white rounded-sm">Update &
                        Resend</button>
                </div>
            </div>
            <div class="my-3">
                <input type="text" class="
                    p-3
                    rounded-sm
                    border border-gray-200
                    w-full
                    rounded-sm
                    text-sm
                    text-center
                    " v-model="verify_code" placeholder="Email Verify Code" />
                <div @click="clickUpdateResend" class="text-right text-sm cursor-pointer hover:underline">Resend
                    Verification
                    Email</div>
            </div>
            <div class="my-5">
                <button @click="clickVerifyCode" class="bg-blue-600 w-full p-3 text-white font-bold rounded-sm">
                    Verify
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
    data() {
        return {
            showEmailFlag: false,
            email: this.$store.state.email,
            updatingEmail: "",
            verify_code: "",
        }
    },

    methods: {
        ...mapMutations(["userLoggedIn", "mutateToken", "mutateUser"]),

        showChangeEmail() {
            this.showEmailFlag = !this.showEmailFlag
        },
        clickUpdateResend() {
            this.$axios.$post("auth/change-email",
                {
                    oldEmail: this.email,
                    email: this.updatingEmail
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                    },
                })
                .then((response) => {
                    this.email = this.updatingEmail;
                    this.$store.commit('saveEmailForVerify', this.updatingEmail);
                    this.$toast.success(response.message);
                    this.showEmailFlag = false;
                })
                .catch(({ response }) => {
                    this.$toast.error(response.data.message);
                })
        },
        clickVerifyCode() {
            this.verifyEmail();
        },
        verifyEmail() {
            this.$axios
                .$post("auth/verify-email",
                    {
                        email: this.email,
                        verifyCode: this.verify_code
                    }, {
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                    },
                })
                .then((response) => {
                    this.userLoggedIn();
                    this.$toast.success(response.message);
                    window.localStorage.setItem(
                        "user",
                        JSON.stringify(response.data.user)
                    );
                    window.localStorage.setItem(
                        "token",
                        JSON.stringify(response.data.token)
                    );
                    this.loading = false;
                    this.mutateToken();
                    this.mutateUser();
                    setTimeout(() => {
                        this.$router.push("/");
                    }, 3000);
                })
                .catch(({ response }) => {
                    this.$toast.error(response.data.message);
                })
        }
    },

    mounted() {
        this.updatingEmail = this.$store.state.email;
        this.clickUpdateResend();
    }
}
</script>