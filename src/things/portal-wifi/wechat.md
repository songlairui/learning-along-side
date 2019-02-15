# 微信连 wifi

[Wi-Fi 硬件鉴权协议接口说明](https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1444894086)

## openwrt 配置

- 安装 node 环境
- 安装软件 nodogsplash

- 配置 nodogsplash

  - TODO 临时放行
  - 启用 FAS, 端口设置为 2051 (默认跳转端口为 2050)

- 启动 node server
  - express 后端

    - 执行 ndsctl 根据 ip 获取 mac
    - 根据 secret 生成 sign
    - 透传 wifi.weixin jsonp 链接
    - 临时放行 微信认证
    - TODO 与服务端同步消息 (grpc mqtt socket)

  - vue 前端
    - 获取 mac、 sign,
    - 生成跳转微信 wifi 链接
