---
title: 海油 ITOS · Java 后端
summary: 海油 ITOS 平台的 Java 后端服务（itosbackend-java），负责 AIS 数据处理、平台侵入告警与 License 机制。
role: 主力贡献者
stack: [Java 17, Spring Boot 3.x, JPA, MinIO, Guava, JWT]
tags: [Spring Boot, AIS 处理, 限流, License, 并发优化]
scope: 作为主力贡献者，负责 AIS 数据处理、平台侵入告警、License 机制等后端服务的设计与开发，参与多环境兼容与稳定性优化（含业务模块接口与增删查改）。
features:
  - name: AIS 目标处理
    desc: 距离限制、Guava 限流、变化检测、线程池队列削峰
  - name: 平台侵入告警
    desc: 船舶临近告警类型统计、按平台配置动态范围
  - name: License 机制
    desc: 生成/验证、公钥移出配置、MAC 透传、jwt 过期移入配置
  - name: 基础能力
    desc: MinIO 重试、日志规范化、JPA 预置点修复
challenge: AIS 目标数据高并发写入、平台侵入告警范围动态配置、License 在多环境（容器/MAC）下的可靠验证。
solution: AIS 限流（Guava）+ 变化检测 + 线程池队列削峰；统一船舶临近告警统计；实现 License 生成/验证与公钥、MAC 透传；MinIO 重传与日志规范化。
result: AIS 处理并发压力明显下降，告警配置灵活，License 跨环境可用，后端稳定性增强。
order: 40
---
