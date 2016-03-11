# 巧用过渡

- category: 十大原则
- order: 9
- subtitle: Use Transition

---

人脑灰质（Gray Matter）会对动态的事物（eg：移动、形变、色变等）保持敏感。在界面中，适当的加入一些过渡效果，能让界面保持生动，同时也能增强用户和界面的沟通。

- Adding:  新加入的信息元素应被告知如何使用，从页面转变的信息元素需被重新识别。

- Receding:  与当前页无关的信息元素应采用适当方式移除。

- Normal: 指那些从转场开始到结束都没有发生变化的信息元素。

````css
video{
  display: block;
}
````

<br>

---


## 在视图变化时保持上下文

<div class="preview-image-boxes cleafix">
  <span>
    <div class="preview-image-box">
      <div class="video-player" style="position: relative;"></div>
      <div class="preview-image-title"></div>
     <div class="preview-image-description"></div>
    </div>
  </span>
</div>

滑入与滑出：可以有效构建虚拟空间。

<br>

<div class="preview-image-boxes cleafix">
  <span>
    <div class="preview-image-box">
      <div class="video-player" style="position: relative;"></div>
      <div class="preview-image-title">传送带示例</div>
     <div class="preview-image-description"></div>
    </div>
  </span>
</div>

传送带：可极大地扩展虚拟空间。

<br>

<div class="preview-image-boxes cleafix">
  <span>
    <div class="preview-image-box">
      <div class="video-player" style="position: relative;"></div>
      <div class="preview-image-title">折叠窗口示例</div>
     <div class="preview-image-description"></div>
    </div>
  </span>
</div>

折叠窗口：在视图切换时，有助于保持上下文，同时也能拓展虚拟空间。

<br>

<img class="preview-img" align="right" alt="视图定位示例" description="点击评论 A 的『查看对话』时，系统随即跳转至新界面，置顶并高亮评论 A ，以便用户快速识别评论 A 在该对话中的位置。" src="https://os.alipayobjects.com/rmsportal/MjXZjESTHYphDUE.png">


视图定位：在视图切换时，保持定位。

<br>

---

## 解释刚刚发生了什么
<div class="preview-image-boxes cleafix">
  <span>
    <div class="preview-image-box">
      <div class="video-player" style="position: relative;"></div>
      <div class="preview-image-title">对象增加示例</div>
     <div class="preview-image-description">新增一条对象时，该行『高亮』告知用户这是新增项；几秒后『高亮』消失，以免过度干扰用户。</div>
    </div>
  </span>
</div>
对象增加：在列表/表格中，新增了一个对象。

<br>
<div class="preview-image-boxes cleafix">
  <span>
    <div class="preview-image-box">
      <div class="video-player" style="position: relative;"></div>
      <div class="preview-image-title">对象删除示例</div>
     <div class="preview-image-description"></div>
    </div>
  </span>
</div>

对象删除：在列表/表格中，删除了一个对象。

<br>
<div class="preview-image-boxes cleafix">
  <span>
    <div class="preview-image-box">
      <div class="video-player" style="position: relative;"></div>
      <div class="preview-image-title">对象更改示例</div>
     <div class="preview-image-description">状态一：用户更改了『详情』中的值；<br>
     状态二：用户点击『保存』后，详情所在的网格出现『黄底』，表明该对象发生了更改；<br>状态三：底色持续『 1 秒』后消失，回复正常。</div>
    </div>
  </span>
</div>

对象更改：在列表/表格中，更改了一个对象。

<br>

<div class="preview-image-boxes cleafix">
  <span>
    <div class="preview-image-box">
      <div class="video-player" style="position: relative;"></div>
      <div class="preview-image-title">弹出框唤起</div>
     <div class="preview-image-description">从页面的某个按钮唤起弹出框时, 弹框从按钮处唤起, 可提示用户弹框与按钮的关第;</div>
    </div>
  </span>
</div>

弹出框唤起：从页面的某个按钮唤起弹出框时, 弹框从按钮处唤起, 可提示用户弹框与按钮的关第;。



---

## 改善感知性能

当无法有效提升『实际性能』时，可以考虑适当转移用户的注意力，来缩短某项操作的感知时间，改善感知性能。

<br>

<img class="preview-img" align="right" alt="按钮过渡示例" src="https://os.alipayobjects.com/rmsportal/MjXZjESTHYphDUE.png">

<img class="preview-img" align="right" alt="页面过渡示例" src="https://os.alipayobjects.com/rmsportal/MjXZjESTHYphDUE.png">


常见过渡效果：『按钮过渡』、『页面过渡』。


<script src="/static/motionDemoLoad.js"></script>