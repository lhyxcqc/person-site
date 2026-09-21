---
company: "某信创工业软件厂商"
role: "后端开发工程师（核心模块负责人）"
period: "2023 — 至今"
summary: "参与工业监控平台 Aster.Itms.Api 的研发与国产数据库迁移。"
highlights:
  - "主导 MySQL → 达梦（DM）数据库迁移：改用达梦方言接入、去除 Oracle 方言，处理排序规则冲突与达梦严格 GROUP BY 约束"
  - "将 56 个 MyBatis Mappers XML（460+ 条件分支）平铺重构至 OrmLite，深度降至一层且 XML 零改动"
  - "排查分布式点位同步在 SemaphoreSlim 并行下的 MySQL 死锁（1213），输出根因分析与修复方案"
  - "负责同步报告、企业同步统计 / 汇总 / 导出等模块的需求与落地"
stack: [".NET 6", "C#", "ServiceStack.OrmLite", "达梦 DM", "MySQL"]
order: 0
---
