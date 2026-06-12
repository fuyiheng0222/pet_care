"use client";

import type { FormEvent } from "react";
import { useMemo, useState } from "react";

function todayInputValue() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function PawIcon() {
  return (
    <svg viewBox="0 0 24 24">
      <path d="M12 13c2.8 0 5 1.8 5 4.1 0 1.7-1.3 2.9-3.1 2.9-.8 0-1.3-.3-1.9-.3s-1.1.3-1.9.3C8.3 20 7 18.8 7 17.1 7 14.8 9.2 13 12 13Z" />
      <path d="M7.8 10.3c-1 .3-2-.5-2.3-1.8-.3-1.4.2-2.7 1.2-3s2 .5 2.3 1.8c.3 1.4-.2 2.7-1.2 3Z" />
      <path d="M16.2 10.3c1 .3 2-.5 2.3-1.8.3-1.4-.2-2.7-1.2-3s-2 .5-2.3 1.8c-.3 1.4.2 2.7 1.2 3Z" />
      <path d="M11 8.2c-1 .1-1.9-.9-2-2.3-.1-1.4.6-2.6 1.6-2.7 1-.1 1.9.9 2 2.3.1 1.4-.6 2.6-1.6 2.7Z" />
      <path d="M13 8.2c1 .1 1.9-.9 2-2.3.1-1.4-.6-2.6-1.6-2.7-1-.1-1.9.9-2 2.3-.1 1.4.6 2.6 1.6 2.7Z" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <path d="M3 10h18" />
      <rect x="3" y="4" width="18" height="18" rx="2" />
    </svg>
  );
}

function PriceIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2v20" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7H14a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m22 2-7 20-4-9-9-4 20-7Z" />
      <path d="M22 2 11 13" />
    </svg>
  );
}

function BookingForm() {
  const [note, setNote] = useState("");
  const minDate = useMemo(() => todayInputValue(), []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = data.get("name") || "主人";
    const service = data.get("service") || "洗护服务";

    setNote(`${name}，已收到您的${service}预约信息，门店稍后会电话确认。`);
    form.reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        主人姓名
        <input type="text" name="name" placeholder="例如：林小姐" required />
      </label>
      <label>
        联系电话
        <input type="tel" name="phone" placeholder="请输入手机号" required />
      </label>
      <label>
        宠物类型
        <select name="pet" required defaultValue="">
          <option value="">请选择</option>
          <option>小型犬</option>
          <option>中大型犬</option>
          <option>猫咪</option>
          <option>其他宠物</option>
        </select>
      </label>
      <label>
        预约项目
        <select name="service" required defaultValue="">
          <option value="">请选择</option>
          <option>轻净洗护</option>
          <option>精修洗剪</option>
          <option>舒缓 SPA</option>
          <option>先到店评估</option>
        </select>
      </label>
      <fieldset className="datetime-field span-2">
        <legend>期望到店时间</legend>
        <div className="datetime-controls">
          <label>
            日期
            <input type="date" name="date" min={minDate} required />
          </label>
          <label>
            时段
            <select name="time" required defaultValue="">
              <option value="">请选择</option>
              <option>10:00 - 12:00</option>
              <option>12:00 - 15:00</option>
              <option>15:00 - 18:00</option>
              <option>18:00 - 21:00</option>
            </select>
          </label>
        </div>
      </fieldset>
      <label className="span-2">
        备注
        <textarea name="note" placeholder="宠物年龄、体重、是否怕水、是否打结等" />
      </label>
      <button className="button span-2" type="submit">
        <SendIcon />
        提交预约
      </button>
      <p className="form-note span-2" aria-live="polite">
        {note}
      </p>
    </form>
  );
}

export default function Home() {
  return (
    <>
      <nav className="nav" aria-label="主导航">
        <div className="nav-inner">
          <a className="brand" href="#top" aria-label="暖爪宠物洗护店首页">
            <span className="brand-mark" aria-hidden="true">
              <PawIcon />
            </span>
            暖爪宠物洗护
          </a>
          <div className="nav-links">
            <a href="#services">服务</a>
            <a href="#process">流程</a>
            <a href="#pricing">价格</a>
            <a href="#reviews">口碑</a>
            <a href="#booking">预约</a>
          </div>
        </div>
      </nav>

      <main id="top">
        <header className="hero">
          <div className="hero-content">
            <div className="eyebrow">一宠一巾一消毒 · 透明洗护</div>
            <h1>让毛孩子干净、舒服、开心回家</h1>
            <p>暖爪宠物洗护店提供猫狗洗澡、美容修剪、SPA护理和基础健康观察。独立洗护区、低噪吹干、全程可视，让每一次护理都更安心。</p>
            <div className="hero-actions">
              <a className="button" href="#booking">
                <CalendarIcon />
                立即预约
              </a>
              <a className="button secondary" href="#pricing">
                <PriceIcon />
                查看价目
              </a>
            </div>
            <div className="hero-stats" aria-label="门店数据">
              <div className="stat"><strong>4.9</strong><span>顾客综合评分</span></div>
              <div className="stat"><strong>30min</strong><span>基础洗护起步</span></div>
              <div className="stat"><strong>6项</strong><span>入店健康观察</span></div>
            </div>
          </div>
        </header>

        <section id="services">
          <div className="wrap">
            <div className="section-head">
              <h2>洗得干净，也照顾情绪</h2>
              <p>按体型、毛量和性格安排护理节奏。怕水、怕吹风、第一次到店的宠物，会先做安抚适应。</p>
            </div>
            <div className="service-grid">
              <article className="card">
                <div>
                  <div className="icon"><svg viewBox="0 0 24 24"><path d="M4 14c4-7 12-7 16 0" /><path d="M8 15a4 4 0 0 0 8 0" /><path d="M9 9V5" /><path d="M15 9V5" /></svg></div>
                  <h3>基础洗护</h3>
                  <p>温和清洁、耳眼护理、指甲修剪、脚底毛清理、低噪吹干。</p>
                </div>
                <div className="tag-row"><span className="tag">犬猫可约</span><span className="tag">低敏香波</span></div>
              </article>
              <article className="card">
                <div>
                  <div className="icon"><svg viewBox="0 0 24 24"><path d="m14.5 4.5 5 5" /><path d="M6 20 20 6" /><path d="m4 14 6 6" /><path d="m3 21 3-1" /></svg></div>
                  <h3>造型修剪</h3>
                  <p>按品种和日常打理习惯定制造型，兼顾可爱度和舒适度。</p>
                </div>
                <div className="tag-row"><span className="tag">泰迪</span><span className="tag">比熊</span><span className="tag">长毛猫</span></div>
              </article>
              <article className="card">
                <div>
                  <div className="icon"><svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z" /><path d="m9 12 2 2 4-4" /></svg></div>
                  <h3>皮毛护理</h3>
                  <p>针对打结、掉毛、皮屑和敏感肌，提供开结、护毛和药浴协助。</p>
                </div>
                <div className="tag-row"><span className="tag">除浮毛</span><span className="tag">护毛素</span></div>
              </article>
              <article className="card">
                <div>
                  <div className="icon"><svg viewBox="0 0 24 24"><path d="M12 2 8 8l4 4 4-4-4-6Z" /><path d="M7 13c-2 1-3 2.7-3 4.5C4 20 7.6 22 12 22s8-2 8-4.5c0-1.8-1-3.5-3-4.5" /><path d="M9 17h6" /></svg></div>
                  <h3>精致 SPA</h3>
                  <p>泡泡浴、香氛护理、肉垫滋养，让宠物在放松中完成深层清洁。</p>
                </div>
                <div className="tag-row"><span className="tag">舒缓</span><span className="tag">拍照友好</span></div>
              </article>
            </div>
          </div>
        </section>

        <section className="process" id="process">
          <div className="wrap">
            <div className="section-head">
              <h2>到店四步，清楚可见</h2>
              <p>每只宠物都有独立记录，护理前后会同步关键情况，方便主人持续观察。</p>
            </div>
            <div className="steps">
              <div className="step"><div className="step-num">1</div><h3>入店评估</h3><p>确认体重、毛况、皮肤、耳道和情绪状态，提前沟通禁忌。</p></div>
              <div className="step"><div className="step-num">2</div><h3>分区洗护</h3><p>独立浴盆和工具分宠使用，避免交叉接触，洗护用品可追溯。</p></div>
              <div className="step"><div className="step-num">3</div><h3>低噪吹干</h3><p>根据耐受程度调节风量和温度，减少紧张和应激。</p></div>
              <div className="step"><div className="step-num">4</div><h3>交接反馈</h3><p>说明护理结果、发现的问题和居家打理建议。</p></div>
            </div>
          </div>
        </section>

        <section id="pricing">
          <div className="wrap">
            <div className="section-head">
              <h2>常用套餐</h2>
              <p>实际价格会按体型、毛量、打结程度和宠物配合度微调，到店前可先发照片预估。</p>
            </div>
            <div className="price-grid">
              <article className="price">
                <div className="price-top"><h3>轻净洗护</h3><small>日常清洁</small></div>
                <div className="amount">¥68<span> 起</span></div>
                <ul>
                  <li>洗澡吹干</li>
                  <li>耳眼清洁</li>
                  <li>指甲修剪</li>
                  <li>脚底毛清理</li>
                </ul>
              </article>
              <article className="price featured">
                <div className="price-top"><h3>精修洗剪</h3><small>热门选择</small></div>
                <div className="amount">¥168<span> 起</span></div>
                <ul>
                  <li>基础洗护全套</li>
                  <li>造型修剪</li>
                  <li>肛门腺护理</li>
                  <li>护理前后照片</li>
                </ul>
              </article>
              <article className="price">
                <div className="price-top"><h3>舒缓 SPA</h3><small>深层护理</small></div>
                <div className="amount">¥228<span> 起</span></div>
                <ul>
                  <li>泡泡浴护理</li>
                  <li>皮毛滋养</li>
                  <li>除浮毛梳理</li>
                  <li>肉垫保湿</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section id="reviews">
          <div className="wrap">
            <div className="section-head">
              <h2>主人们常夸的细节</h2>
              <p>耐心比速度重要。我们希望宠物愿意再次进门，也希望主人能清楚知道护理发生了什么。</p>
            </div>
            <div className="reviews">
              <article className="review big">
                <div>
                  <div className="stars">★★★★★</div>
                  <h3>“第一次洗完没有躲起来。”</h3>
                  <p>我家狗平时特别怕吹风，店员会分阶段休息，还把耳朵发红的问题提醒了我。洗完香但不冲，毛也很蓬松。</p>
                </div>
                <strong>柚子妈妈 · 柯基 2岁</strong>
              </article>
              <div className="review-list">
                <article className="review">
                  <div className="stars">★★★★★</div>
                  <h3>猫咪洗护很稳</h3>
                  <p>提前确认性格和禁忌，洗后会发照片，接回家状态也比较放松。</p>
                </article>
                <article className="review">
                  <div className="stars">★★★★★</div>
                  <h3>造型不会剪太夸张</h3>
                  <p>修出来很自然，脚底和眼周也清爽，后面打理省心很多。</p>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="booking" id="booking">
          <div className="wrap booking-layout">
            <aside className="visit-box">
              <h2>预约到店</h2>
              <p>营业时间 10:00 - 21:00，建议提前半天预约。节假日、长毛犬猫和大体型宠物请预留更长护理时间。</p>
              <div className="visit-list">
                <div className="visit-item"><span className="icon"><svg viewBox="0 0 24 24"><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg></span><span><strong>门店地址</strong>上海市萌宠路 88 号 1 层</span></div>
                <div className="visit-item"><span className="icon"><svg viewBox="0 0 24 24"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2Z" /></svg></span><span><strong>联系电话</strong>021-8888-6688</span></div>
                <div className="visit-item"><span className="icon"><svg viewBox="0 0 24 24"><path d="M7 8h10" /><path d="M7 12h8" /><path d="M21 12c0 4.4-4 8-9 8a9.8 9.8 0 0 1-4-.8L3 20l1.4-3.4A7.4 7.4 0 0 1 3 12c0-4.4 4-8 9-8s9 3.6 9 8Z" /></svg></span><span><strong>预约提示</strong>提交后门店会在 15 分钟内电话确认</span></div>
              </div>
            </aside>

            <div className="booking-panel">
              <BookingForm />
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-inner">
          <div><strong>暖爪宠物洗护</strong> · 干净、温柔、可追踪</div>
          <div>© 2026 Warm Paw Grooming</div>
        </div>
      </footer>
    </>
  );
}
