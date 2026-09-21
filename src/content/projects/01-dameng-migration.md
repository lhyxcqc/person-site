---
title: "MySQL → 达梦（DM）数据库迁移"
summary: "工业监控平台核心库的国产数据库适配与平滑迁移"
role: "迁移主导"
stack: [".NET 6", "达梦 DM 8", "MySQL", "OrmLite"]
tags: ["信创", "数据库迁移", "方言适配"]
challenge: "平台原依赖 MySQL，需迁移至达梦 DM 以满足信创要求；存在 Oracle 方言残留、utf8mb4 排序规则冲突、达梦严格 GROUP BY 约束等系列不兼容问题。"
solution: "改用达梦方言接入并去除 Oracle 方言；将 56 个 MyBatis Mappers XML（460+ 条件分支）平铺重构至 OrmLite，深度降至一层且 XML 零改动；为同步报告表补建索引；通过 DatabaseInitializerBase + 版本化脚本处理 schema 演进。"
result: "核心库完成达梦适配并稳定运行，迁移对业务代码侵入最小，为后续全面信创打下基础。"
order: 0
---
