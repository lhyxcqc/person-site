---
title: 信创下一代统一产品 jn.itms.v2
summary: 微服务化、模块化的信创统一产品（jn.itms.v2），承载 C# 老系统向 Java 重写与接口兼容。
role: 核心贡献者
stack: [Java 17, Spring Boot 3.5, KingBase, Nacos, Redis, ES, RabbitMQ, MinIO]
tags: [信创, C#→Java, 兼容层, KingBase, 兼容测试]
scope: 作为核心贡献者，负责 C#→Java 兼容测试基础设施与接口兼容层建设，参与信创数据库对齐与 DTO 中文化，支撑老系统平滑迁移（含模块接口与增删查改改造）。
features:
  - name: C#→Java 兼容测试基础设施
    desc: CLI、端到端测试、解析+归一化+diff 自动化
  - name: C# 老系统接口兼容层
    desc: /Task、TimerServer、jwt、路由大小写对齐
  - name: 数据库对齐 / 信创
    desc: MySQL 保留字拦截器、FrameRolePO 主键 Long→String、KingBase 部署脚手架
  - name: DTO 中文化
    desc: 批量补齐中文 @Schema 注释
  - name: tsgen
    desc: 日期时间专用 TypeScript 类型生成
challenge: C# 老系统功能需平滑迁移到 Java 微服务，且要兼容既有接口与数据库语义。
solution: 搭建 C#→Java 翻译对照兼容性测试基础设施；实现老系统接口兼容层（Task/TimerServer/jwt/路由大小写）；MySQL 保留字拦截器、KingBase 部署脚手架；批量补全 DTO 中文 Schema。
result: 形成可回归的跨语言兼容测试体系，老接口在 Java 侧平滑对齐，信创数据库落地有脚手架支撑。
order: 50
---
