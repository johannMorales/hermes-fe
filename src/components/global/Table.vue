<template>
  <div class="table" :class="hoverable ? 'hoverable' : ''" :style="tableStyle">
    <div class="table__header">
      <template v-for="(column, index) in columns">
        <div
          :key="index"
          class="cell"
          :class="column.isActions ? 'actions' : ''"
        >
          {{ column.isActions ? "" : column.name }}
        </div>
      </template>
    </div>
    <template v-for="datum in data">
      <div :key="datum[keyName]" class="table__item">
        <template v-for="(column, index) in columns">
          <template v-if="column.isActions">
            <div :key="index" class="cell actions justify-center">
              <ion-icon name="settings"></ion-icon>
            </div>
          </template>
          <template v-else-if="column.data">
            <div :key="index" class="cell">{{ datum[column.data] }}</div>
          </template>
          <template v-else-if="column.slot">
            <div :key="index" class="cell">
              <slot :name="column.slot" />
            </div>
          </template>
        </template>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    columns: {
      type: Array
    },
    data: {
      type: Array
    },
    showHeader: {
      type: Boolean,
      default: true
    },
    hoverable: {
      type: Boolean,
      default: true
    },
    keyName: {
      type: String,
      default: "id"
    }
  },
  computed: {
    tableStyle() {
      return {
        gridTemplateColumns: this.columns.reduce(
          (acc, { width, isActions }) =>
            acc + (width || (isActions ? "50px " : "1fr ")),
          ""
        )
      };
    }
  }
};
</script>

<style lang="scss">
.table {
  width: 100%;
  border-radius: 40px;
  display: grid;
  grid-template-columns: 140px 1fr 1fr 140px 140px 50px;
  align-items: center;

  @include respond(sm) {
    display: block;
  }

  &__header {
    display: contents;
    .cell {
      background-color: #d9d9d9;
      align-self: center;
      font-weight: bold;
    }
  }

  &__item {
    display: contents;
    .cell {
      align-self: center;
    }
  }

  &__item:nth-child(even) > .cell {
    background-color: #fafafa;
  }

  &__item:nth-child(odd) > .cell {
    background-color: #ffff;
  }
}

.cell {
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 15px;

  @include respond(sm) {
    padding: 8px;
    justify-content: center !important;
  }
}

.actions {
  @include respond(sm) {
    display: none;
  }
}

.hoverable {
  .table__item:hover > .cell {
    background-color: #f0f5ff;
  }
}

.justify-center {
  justify-content: center;
}
</style>
