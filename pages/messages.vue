<template>
  <div class="bg-gray-50 h-screen">
    <MainNav />
    <div class="lg:mx-20 lg:flex mt-4 container">
      <div
        v-show="sidebar"
        class="
          lg:w-1/2
          w-full
          bg-white
          p-4
          my-4
          rounded-md
          lg:relative
          fixed
          z-10
          lg:top-0
          top-12
          left-0
          h-full
        "
      >
        <input
          type="text"
          class="bg-gray-100 p-3 w-full rounded-md"
          placeholder="Search a message"
        />
        <div v-for="(single, index) in list" :key="index">
          <div
            class="flex py-4"
            @click="singleMessage(single.messaging_id, index)"
          >
            <img v-if="single.sender.avatar === null" src="/user.png" alt="" />
            <img
              v-else
              :src="single.sender.avatar"
              class="w-12 h-12 rounded-full"
              alt=""
            />
            <div class="lg:ml-3 my-auto">
              <div>
                {{ single.sender.first_name }} {{ single.sender.last_name }}
              </div>
              <div class="text-sm">{{ single.sender.bio }}</div>
            </div>
            <div class="text-xs ml-auto mt-auto">
              <time-ago :refresh="60" :datetime="single.created_at"></time-ago>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full lg:ml-4 bg-white p-4">
        <div>
          <div v-if="chats !== null">
            <div class="flex py-4">
              <img v-if="sender.avatar === null" src="/user.png" alt="" />
              <img
                v-else
                :src="sender.avatar"
                class="w-12 h-12 rounded-full"
                alt=""
              />
              <div class="ml-3">
                <div>{{ sender.first_name }} {{ sender.last_name }}</div>
                <div class="text-sm">{{ sender.bio }}</div>
              </div>
            </div>
            <div class="border-b border-gray-100 mb-8"></div>
            <div v-for="(chat, index) in chats" :key="index">
              <div
                v-if="chat.sender === user.id"
                class="lg:w-2/3 mr-auto flex my-5"
              >
                <div class="text-sm p-2 bg-blue-100 rounded-md">
                  {{ chat.content }}
                </div>
                <div class="text-xs mt-auto ml-4">
                  <time-ago
                    :refresh="60"
                    :datetime="chat.created_at"
                  ></time-ago>
                </div>
              </div>
              <div v-else class="lg:w-2/3 ml-auto flex justify-end my-5">
                <div class="text-xs mt-auto mr-4">
                  <time-ago
                    :refresh="60"
                    :datetime="chat.created_at"
                  ></time-ago>
                  <!-- {{ chat.created_at.substring(0, 10) }} -->
                </div>
                <div class="text-sm p-2 bg-yellow-100 rounded-md">
                  {{ chat.content }}
                </div>
              </div>
            </div>
          </div>
          <div v-else class="text-center p-4">No selected chats!</div>
          <div
            v-if="single !== undefined || chats !== null"
            class="w-full relative"
          >
            <input
              type="text"
              class="p-3 w-full bg-gray-100 rounded-md"
              placeholder="Type a message"
              v-model="message"
            />
            <div class="flex absolute top-1 right-4">
              <img
                @click="sendMessage"
                class="p-2 cursor-pointer"
                src="/icons/send.svg"
                alt=""
              />
              <img class="p-2" src="/icons/img.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template> 
<script>
import { mapState } from "vuex";
import { mapMutations } from "vuex";
import { TimeAgo } from "vue2-timeago";

export default {
  computed: mapState(["sidebar", "token", "user"]),
  components: {
    TimeAgo,
  },
  data() {
    return {
      message: "",
      list: null,
      chats: null,
      sender: [],
      num: null,
      single: this.$router.history.current.query.slug,
    };
  },
  methods: {
    ...mapMutations(["toggleSidenav"]),
  },
  mounted() {
    if (screen.width <= 600) {
      this.toggleSidenav();
    }
    console.log(this.single);
    try {
      this.$axios
        .$get(`messaging/chat-list`, {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer " + this.token,
          },
        })
        .then((response) => {
          console.log(response.data);
          this.list = response.data;
        });
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    sendMessage() {
      try {
        this.$axios
          .$post(
            `messaging/send-message`,
            {
              content: this.message,
              sent_to: this.single || this.chats[0].sent_to,
            },
            {
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: "Bearer " + this.token,
              },
            }
          )
          .then((response) => {
            console.log(response.data);
            this.singleMessage(this.chats[0].messaging_id, this.num);
          });
      } catch (error) {
        console.log(error);
      }
    },
    singleMessage(id, index) {
      this.sender = this.list[index].sender;
      this.num = index;
      try {
        this.$axios
          .$post(
            `messaging/chat-messages`,
            {
              messaging_id: id,
            },
            {
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: "Bearer " + this.token,
              },
            }
          )
          .then((response) => {
            console.log(response.data);
            this.chats = response.data.reverse();
          });
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
.show {
  width: 50% !important;
}
</style>