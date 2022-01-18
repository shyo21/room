# CS496-MadCamp-Week-3
# Developer's Room


Making 3D room with interactive features

##### made by. 김수효, 이혜원(일어나)


## 1. Basic structure

react에서 three.js의 기능들을 조금 더 원활하게 사용할 수 있도록 해주는 react-three-fiber를 기반으로 3D 모델링과 다양한 상호작용을 할 수 있는 웹페이지를 제작했다.

'개발자의 방'을 메인 주제로 디자인과 기능을 구현했다.

## 2. 3D Modeling

### a) Fusion 360

![image](https://user-images.githubusercontent.com/79900341/149933676-934bf9a8-aba6-430c-a365-7d4158a2cf13.png)

가장 널리 사용되는 3D 모델링 툴인 blender는 디자이너에게 무한에 가까운 자유도를 제공하는 강력한 기능들을 가지고 있지만, 초보자가 직관적으로 사용하기에는 다소 어렵다.

따라서 조금 더 직관적인 모델링을 제공하는 Autodesk의 Fusion 360을 이용해 기본적인 3D 객체를 제작했다.

제작한 객체는 .fbx 확장자로 내보낸 뒤, blender에서 후처리 과정을 진행했다.

### b) blender

![image](https://user-images.githubusercontent.com/79900341/149932233-d4dcc1b6-152d-494b-a2d3-2385c46316bc.png)

Fusion 360에서 모델링한 3D 객체를 가져온 뒤, blender 자체적으로 제공하는 조명 기능을 활용해 적절한 환경을 조성했다.

이 환경을 기반으로 표면의 색깔과 질감을 생성하고 gltf 포맷으로 내보냈다.

### c) react-three-fiber

![image](https://user-images.githubusercontent.com/79900341/149934537-e6fdb89b-24a3-423f-b793-66bdecaf5ee0.png)

생성된 gltf 파일을 gltfjsx 툴을 이용해 react-three-fiber에서 바로 사용할 수 있는 js 형식의 파일로 변환했다.

이제 js파일에 존재하는 수많은 mesh들을 reacte-three-fiber를 이용해 조작해 사용자와의 interaction을 생성할 수 있다.

## 3. Features

### a) Youtube

컴퓨터 화면과 세 개의 버튼을 이용해 유튜브의 영상을 재생하고, 조작하고, 플레이리스트를 제작할 수 있다.

### b) PaintBrush

제공되는 그림판에서 다양한 색의 펜을 이용해 자유롭게 그림을 그리고, 완성된 그림을 벽면의 액자에 게시할 수 있다.

### c) Bookmarks

3개의 링크를 북마크에 저장할 수 있다.

벽면의 액자를 클릭해 저장한 각 링크로 이동할 수 있다.

### d) Adjusting Light

기본 상태의 조명은 노을빛의 강한 조명을 측면에서 조사하고, 흰색의 조명을 상단에서 조사해 해질녘의 방 느낌을 구현하였다.

책상 위의 스탠드를 클릭하면 메인 조명이 꺼지고, 스탠드에서 노란빛의 약한 조명이 나와 새벽의 방 느낌을 구현하였다.

### e) Physics
