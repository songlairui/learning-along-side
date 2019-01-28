# Class

## FAQ

### super() 有什么用?

> 通过 ruanyifeng 文章了解到 super(), super.xx()  
> 不过文章中的解释比较费劲, 就像把 this 分成 n 中场景一样.

- ~~当作函数使用~~
- ~~当作对象使用~~

用于 **使用上一级构造函数**

#### 场景说明

```javascript {10}
class A {
  constructor() {
    console.info('this in A~constructor', this); // -- 并非在此上下文执行
    this.x = 1;
    console.info('this in A~constructor $next', this); // -- 并非在此上下文执行
  }
  p() {
    console.info('this in A~constructor.p', this); // -- 并非在此上下文执行
    return 2;
  }
}
A.prototype.q = 123;

class B extends A {
  constructor() {
    // 此词法作用域的context 为 B.prototype.constructor, 所以 this.x 可以通过 B.x 直接取到
    super(); // this in A~constructor this B {}
    console.log(super.p()); // this in A~constructor.p B { x: 1 } 456, // 2
    console.info('this in B~constructor', this); // this in B~constructor this B { x: 1 }
    console.log(super.q); // 123
    console.log(this.q); // 456
  }
}

B.prototype.q = 456; // 操作 prototype ,会更改 B.prototype.constructor

let b = new B();
```

`super` 为父类的构造函数

| context                       |    output    | remark |
| ----------------------------- | :----------: | -----: |
| `this in A~constructor`       |   `B { }`    |        |
| `this in A~constructor $next` | `B { x: 1 }` |        |
| `this in A~constructor.p`     | `B { x: 1 }` |        |
| `this in B~constructor`       | `B { x: 1 }` |        |

可观察到, 四处 this 指向同一个内存对象 `b.__proto__`, 即 `Class B {}`.

`this.x = 1` 执行前后, 此内存对象表现发生变化,  
说明`class`跟`function`一样是一段等待执行到字符串, 每`new`时执行.

::: warning
ES6 要求，子类的构造函数必须执行一次 super 函数, 否则报错
:::

### 参考链接:

[ruanyifeng ES6](https://es6.ruanyifeng.com/#docs/class-extends#super-%E5%85%B3%E9%94%AE%E5%AD%97)
