---
title: ITMS 审计分支 · 数据同步与告警中心
summary: 面向审计场景的 ITMS 分支（aster.itms-audit），聚焦数据同步一致性、告警中心优化与大屏接口性能。
role: 第一作者
stack: [C#, .NET 6, ASP.NET, MySQL, Redis, ECharts]
tags: [数据同步, 告警中心, 预案, 大屏性能]
features:
  - name: 数据同步修复
    desc: 区域父级未更新、区域编码对不上、名称重复、删除点位日志
  - name: 告警中心优化
    desc: 资源编码改 bigint 加索引、时间过滤
  - name: 预案
    desc: 模板生成与执行、信息调整
  - name: 大屏接口
    desc: 接入情况/企业分组 echart 加载优化、分辨率数量计算
  - name: 流媒体配置
    desc: 视频调阅记录存 redis、录像回放/预览日志
challenge: 区域/点位同步存在父级未更新、编码对不上、删除点位日志缺失；大屏接口加载缓慢。
solution: 修复数据同步各类边界（区域编码、名称重复、删除日志）；优化告警中心资源编码与索引；实现预案模板生成与执行；大屏接口与 echart 加载性能优化。
result: 同步数据一致性显著提升，告警查询与大屏展示性能改善，预案执行闭环可用。
order: 30
---
