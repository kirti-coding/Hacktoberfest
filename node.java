package implementation;

public class Node <E extends Comparable<E>>{
    private E data;
    private Node<E> left;
    private Node<E> right;

    public Node(E data){
        this.data = data;
        left = null;
        right = null;
    }

    public E getData() {
        return data;
    }

    public void setData(E data) {
        this.data = data;
    }
}
