<template>
  <div>
    <div>
      <el-row type="flex" justify="space-between">
        <el-col :span="5">
          <el-card shadow="hover">
            <div class="flex user-count cursor">
              <div class="left-icon">
                <i class="el-icon-user" />
              </div>
              <div class="top-message">
                <div class="value">1234</div>
                <div class="title">用户数量</div>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="5">
          <el-card shadow="hover">
            <div class="flex rent-count cursor">
              <div class="left-icon">
                <i class="el-icon-goods" />
              </div>
              <div class="top-message">
                <div class="value">1234</div>
                <div class="title">出租房源数量</div>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="5">
          <el-card shadow="hover">
            <div class="flex sell-count cursor">
              <div class="left-icon">
                <i class="el-icon-house" />
              </div>
              <div class="top-message">
                <div class="value">1234</div>
                <div class="title">出售房源数量</div>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="5">
          <el-card shadow="hover">
            <div class="flex total-money cursor">
              <div class="left-icon">
                <i class="el-icon-money" />
              </div>
              <div class="top-message">
                <div class="value">1234</div>
                <div class="title">总交易额</div>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
i {
  vertical-align: text-top;
}

.user-count {
  .left-icon {
    font-size: 60px;
    padding: 10px;
    color: rgb(45, 140, 240);
    height: 60px;
    width: 60px;
    border-radius: 6px;
    transition: 0.2s all;
  }

  &:hover {
    .left-icon {
      transition: 0.2s all;
      color: white;
      background: rgb(45, 140, 240);
    }
  }

  .top-message {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 200px;
    text-align: center;

    .title {
      color: #999999;
    }

    .value {
      font-size: 22px;
      color: #3d3d3d;
      font-weight: bold;
    }
  }
}

.rent-count {
  .left-icon {
    font-size: 60px;
    padding: 10px;
    color: red;
    height: 60px;
    width: 60px;
    border-radius: 6px;
    transition: 0.2s all;
  }

  &:hover {
    .left-icon {
      transition: 0.2s all;
      color: white;
      background: red;
    }
  }

  .top-message {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 200px;
    text-align: center;

    .title {
      color: #999999;
    }

    .value {
      font-size: 22px;
      color: #3d3d3d;
      font-weight: bold;
    }
  }
}

.sell-count {
  .left-icon {
    font-size: 60px;
    padding: 10px;
    color: #656565;
    height: 60px;
    width: 60px;
    border-radius: 6px;
    transition: 0.2s all;
  }

  &:hover {
    .left-icon {
      transition: 0.2s all;
      color: white;
      background: #656565;
    }
  }

  .top-message {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 200px;
    text-align: center;

    .title {
      color: #999999;
    }

    .value {
      font-size: 22px;
      color: #3d3d3d;
      font-weight: bold;
    }
  }
}

.total-money {
  .left-icon {
    font-size: 60px;
    padding: 10px;
    color: green;
    height: 60px;
    width: 60px;
    border-radius: 6px;
    transition: 0.2s all;
  }

  &:hover {
    .left-icon {
      transition: 0.2s all;
      color: white;
      background: green;
    }
  }

  .top-message {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 200px;
    text-align: center;

    .title {
      color: #999999;
    }

    .value {
      font-size: 22px;
      color: #3d3d3d;
      font-weight: bold;
    }
  }
}
</style>
