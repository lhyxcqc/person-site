---
title: "中心下载任务 V2"
summary: "基于既有平台的录像下载任务编排与服务化"
role: "核心开发"
stack: [".NET 6", "C#", "Redis", "ConcurrentDictionary"]
tags: ["任务编排", "缓存", "流式回写"]
challenge: "需在平台内新增一套下载任务体系，支持哈希表存储任务、按平台缓存客户端管理器，并从 Redis 读取进度回写数据库。"
solution: "用 ConcurrentDictionary 按 PlatformId 缓存客户端管理器；设计 StreamMediaCtlController 分部类从 Redis 读取进度并回写 DB；处理跨命名空间类型冲突（TranscodeCfg）与录像地址 HTTP/HTTPS 不一致的浏览器拦截问题。"
result: "V2 下载任务体系落地，任务编排与进度回写闭环完整，可支撑多平台并发下载。"
order: 2
---
