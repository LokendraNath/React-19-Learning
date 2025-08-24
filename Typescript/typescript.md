# TypeScript की परिभाषा (Definition in Hindi)

- **TypeScript** माइक्रोसॉफ़्ट द्वारा बनाया गया एक **ओपन-सोर्स प्रोग्रामिंग लैंग्वेज** है।  
  यह **JavaScript का superset** है, जिसमें _types_ (जैसे `number`, `string`, `boolean`) और **type-checking** जैसी सुविधाएँ जोड़ी गई हैं।

- इसकी मदद से हम कोड को:

  - ज़्यादा सुरक्षित (**error-free**),
  - समझने में आसान, और
  - बड़े प्रोजेक्ट्स के लिए **maintainable** बना सकते हैं।

- 👉 **सरल शब्दों में:**  
  **TypeScript = JavaScript + Types (डेटा के प्रकार) + Error Safety 🚀**

---

# TypeScript में Annotation

- **Annotation** का मतलब होता है किसी variable, function, या parameter के साथ **explicit type लिखना**,  
  ताकि **compiler** और **developer** दोनों को साफ पता रहे कि यह किस type का data है।

- TypeScript में annotation एक **तरीका** है जिससे हम specify करते हैं कि variables और functions:
  - किस type का data स्वीकार करेंगे, और
  - किस type का data return करेंगे।

---

# Type Inference

- Compiler khud hi variable / expression ka type nikal leta hai, bina programmer ke explicitly likhe.

---

# Function Parameter Annotation

- Matlab jab aap function ke parameters ke liye explicitly type declare karte ho.

```
function add(a: number, b: number): number {
  return a + b;
}
```

# TypeScript Note: `void`

## 🔹 What is `void`?

- `void` ek **special return type** hai.
- Jab function **kuch return nahi karta**, tab `void` use hota hai.

---

## 🔹 Example

```ts
function logMessage(message: string): void {
  console.log(message); // ✅ only logs, no return
}
```
