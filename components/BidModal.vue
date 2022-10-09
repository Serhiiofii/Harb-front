<template>
  <section>
    <b-modal v-model="isCardModalActive" :width="500" scroll="keep">
      <div class="card">
        <div class="card-content">
          <div class="text-2xl font-bold text-center my-3">Place a Bid:</div>
          <div class="flex justify-evenly">
            <div class="w-44 rounded-md bg-blue-100"></div>
            <div>
              <div class="font-bold my-1">Tatomh Hose:</div>
              <div>
                <div class="text-xs mb-1">Enter Amount BId</div>
                <input
                  type="number"
                  class="p-2 border rounded-sm border-gray-200"
                />
                <div class="flex justify-between mt-1">
                  <div
                    class="
                      bg-green-200
                      text-green-900
                      w-14
                      text-xs text-center
                      rounded-ms
                      p-1
                    "
                  >
                    10,000
                  </div>
                  <div
                    class="
                      bg-green-200
                      text-green-900
                      w-14
                      text-xs
                      rounded-sm
                      text-center
                      p-1
                    "
                  >
                    30,000
                  </div>
                  <div
                    class="
                      bg-green-200
                      text-green-900
                      w-14
                      rounded-sm
                      text-xs text-center
                      p-1
                    "
                  >
                    50,000
                  </div>
                </div>
                <button
                  class="p-2 bg-blue-600 text-white w-full rounded-sm mt-4"
                >
                  Make Bid
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </b-modal>
  </section>
</template>

<script>
export default {
  props: { isCardModalActive: Boolean },
};
</script>