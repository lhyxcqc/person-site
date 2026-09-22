---
title: 托克托 / 山东管网集成 API
summary: 托克托等管网项目的综合集成 API 服务（itos_integrate_api），基于 .NET 对接多类设备与子系统。
role: 参与（数据库兼容）
stack: [.NET, EFCore, SqlSugar, GBase, MySQL]
tags: [集成 API, 数据库兼容, 设备接入]
scope: 参与托克托/管网集成 API 的数据库兼容与事务改造，负责 GBase 建表/视图脚本、关键字兼容等数据库层工作，并参与设备巡检、SNMP 采集与告警上报模块的开发与维护。
features:
  - name: GBase 数据库兼容
    desc: 建表/视图脚本、rownum 处理、关键字兼容（本人主要提交）
  - name: 事务改造
    desc: TransactionScope 统一改为 EFCore 写法
  - name: 设备巡检与 SNMP 采集
    desc: 巡检逻辑与 SNMP 采集优化
  - name: 火气 / 透传 / 机器人告警
    desc: 火气系统、TCP 透传 ModbusRtu、机器人报警事件上报
challenge: 多数据库（GBase/MySQL）并存下的兼容与事务一致性问题。
solution: 补齐 GBase 建表与关键字兼容脚本，统一事务写法为 EFCore，优化设备采集与告警上报链路。
result: 数据库兼容层可用，集成 API 在管网项目中稳定运行；本人贡献集中于数据库兼容与事务改造部分。
order: 70
---
